import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: 'https://api.react.mobi/graphql', // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache({
    }).restore(initialState || {}),
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


// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
// import { onError } from 'apollo-link-error';
// import { withClientState } from 'apollo-link-state';
// import { ApolloLink } from 'apollo-link';

// const cache = new InMemoryCache({
//   cacheRedirects: {
//     Query: {
//       movie: (_, { id }, { getCacheKey }) =>
//         getCacheKey({ __typename: 'Movie', id });
//     }
//   }
// });

// const request = async (operation) => {
//   const token = await AsyncStorage.getItem('token');
//   operation.setContext({
//     headers: {
//       authorization: token
//     }
//   });
// };

// const requestLink = new ApolloLink((operation, forward) =>
//   new Observable(observer => {
//     let handle: any;
//     Promise.resolve(operation)
//       .then(oper => request(oper))
//       .then(() => {
//         handle = forward(operation).subscribe({
//           next: observer.next.bind(observer),
//           error: observer.error.bind(observer),
//           complete: observer.complete.bind(observer),
//         });
//       })
//       .catch(observer.error.bind(observer));

//     return () => {
//       if (handle) handle.unsubscribe;
//     };
//   })
// );

// const client = new ApolloClient({
//   link: ApolloLink.from([
//     onError(({ graphQLErrors, networkError }) => {
//       if (graphQLErrors) {
//         sendToLoggingService(graphQLErrors);
//       }
//       if (networkError) {
//         logoutUser();
//       }
//     }),
//     requestLink,
//     withClientState({
//       defaults: {
//         isConnected: true
//       },
//       resolvers: {
//         Mutation: {
//           updateNetworkStatus: (_, { isConnected }, { cache }) => {
//             cache.writeData({ data: { isConnected }});
//             return null;
//           }
//         }
//       },
//       cache
//     }),
//     new HttpLink({
//       uri: 'https://w5xlvm3vzz.lp.gql.zone/graphql',
//       credentials: 'include'
//     })
//   ]),
//   cache
// });
