import { useState } from 'react';

export function useLoadMore(fetchMore, data, search) {
  const [ isLoadingMore, setIsLoadingMore ] = useState(false);

  function loadMore() {
    setIsLoadingMore(true);
    fetchMore({
      variables: {
        skip: data.list.length,
        search,
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
