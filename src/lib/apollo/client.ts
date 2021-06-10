import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from "@apollo/client";
import merge from "lodash/merge";
import { getStorage } from "@/utils/store";
import { USER_TOKEN } from "@/config/base";
import { setContext } from "@apollo/client/link/context";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createApolloClient() {
  const httpLink = createHttpLink({
    uri: "http://localhost:3101/graphql",
  });
  const authLink = setContext(async (_, { headers }) => {
    const token = await getStorage(USER_TOKEN);
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    // link: createIsomorphLink(),
    // uri: "http://localhost:3101/graphql",
    link: authLink.concat(httpLink),

    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          // 针对 list to item 优化
          // fields: {
          //   news(_, { args, toReference }) {
          //     return toReference({
          //       __typename: "News",
          //       _id: args?._id,
          //     });
          //   },
          // },
        },
      },
    }),
  });
}

export function initializeApollo(initialState?: NormalizedCacheObject) {
  console.log("apolloClient: ", apolloClient);
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // get hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache);

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
