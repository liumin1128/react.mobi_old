import { ApolloClient, InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { withClientState } from 'apollo-link-state';
import { ApolloLink } from 'apollo-link';
import { Observable } from 'rxjs';
// import Snackbar from '@/components/snackbar';
import { getStorage } from '@/utils/store';
import { USER_TOKEN_KEY, ENV } from '@/config/base';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

const cache = new InMemoryCache({
  // 存缓解析器，实现列表目录到详情
  cacheRedirects: {
    Query: {
      say: (_, { _id }, { getCacheKey }) => getCacheKey({ __typename: 'Say', _id }),
      article: (_, { _id }, { getCacheKey }) => getCacheKey({ __typename: 'Article', _id }),
    },
  },
});

const request = async (operation) => {
  const token = await getStorage(USER_TOKEN_KEY) || {};
  operation.setContext({
    headers: {
      Authorization: `bearer ${token}`,
    },
  });
};

const requestLink = new ApolloLink((operation, forward) => new Observable((observer) => {
  let handle;
  Promise.resolve(operation)
    .then(oper => request(oper))
    .then(() => {
      handle = forward(operation).subscribe({
        next: observer.next.bind(observer),
        error: observer.error.bind(observer),
        complete: observer.complete.bind(observer),
      });
    })
    .catch(observer.error.bind(observer));

  return () => {
    if (handle) handle.unsubscribe;
  };
}));

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    // link: new HttpLink({
    //   uri: 'https://api.react.mobi/graphql', // Server URL (must be absolute)
    //   credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    // }),
    link: ApolloLink.from([
      onError(({ graphQLErrors, networkError }) => {
        if (graphQLErrors) {
          // console.log('graphQLErrors');
          // console.log(graphQLErrors);
          // Snackbar.error(graphQLErrors[0].message);
          // throw new Error(graphQLErrors);
          // sendToLoggingService(graphQLErrors);
          // throw graphQLErrors[0];
        }
        if (networkError) {
          // Snackbar.error('网络连接失败');
          console.log('logoutUser');
          console.log(networkError);
          // logoutUser();
        }
      }),
      requestLink,
      withClientState({
        defaults: {
          isConnected: true,
        },
        resolvers: {
          Mutation: {
            updateNetworkStatus: (_, { isConnected }, { cache }) => {
              cache.writeData({ data: { isConnected } });
              return null;
            },
          },
        },
        cache,
      }),
      new HttpLink({
        uri: ENV ? 'http://localhost:3101/graphql' : 'https://api.react.mobi/graphql', // Server URL (must be absolute)
        credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
      }),
    ]),
    cache: cache.restore(initialState || {}),
  });
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
