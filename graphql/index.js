export const loadMore = (data) => {
  return data.fetchMore({
    variables: {
      skip: data.list.length,
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
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
};
