import { graphql } from 'react-apollo';

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

export const fetchMore = (data) => {
  return data.fetchMore({
    variables: {
      skip: data.list.length,
    },
    updateQuery,
  });
};


export const listQuery = schema => graphql(schema, {
  options: {
    variables: {
      skip: 0,
    },
  },
  props: ({ data }) => ({
    data,
    fetchMore: () => fetchMore(data),
  }),
});
