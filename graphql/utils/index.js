import { graphql } from 'react-apollo';

export const listQuery = schema => graphql(schema, {
  options: {
    variables: {
      skip: 0,
    },
  },
  // props: ({ data }) => ({
  //   data,
  //   loadMore: () => data.fetchMore({
  //     variables: {
  //       skip: data.list.length,
  //     },
  //     updateQuery,
  //   }),
  // }),
});
