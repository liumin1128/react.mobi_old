import { useState } from 'react';
import { useQuery as _useQuery } from 'react-apollo-hooks';

export function useLoadMore(fetchMore, data, variables) {
  const [ isLoadingMore, setIsLoadingMore ] = useState(false);

  function loadMore() {
    setIsLoadingMore(true);
    fetchMore({
      variables: {
        ...variables,
        skip: data.list.length,
      },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        setIsLoadingMore(false);
        if (!fetchMoreResult) {
          return previousResult;
        }
        return {
          ...fetchMoreResult,
          list: [
            ...previousResult.list,
            ...fetchMoreResult.list,
          ],
        };
      },
    });
  }

  return [ isLoadingMore, loadMore ];
}

export function useQuery(schema, variables, options) {
  const { fetchMore, data, ...other } = _useQuery(schema, { variables, ...options });
  const [ isLoadingMore, loadMore ] = useLoadMore(fetchMore, data, variables);

  return { isLoadingMore, loadMore, fetchMore, data, ...other };
}
