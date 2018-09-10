export const fetchMore = (data) => {
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

export const updateQuery = (previousResult, { fetchMoreResult }) => {
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
};
