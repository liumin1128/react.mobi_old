import React from 'react';
import { graphql } from 'react-apollo';
import Item from './item';
import { MEIZITU_LIST } from '../../graphql/meizitu';

function PostList({
  data: {
    loading, error, list,
  }, loadMore,
}) {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (<div>

    {
      list.map(i => <Item key={i._id} {...i} />)
    }

    {
      <button onClick={() => loadMore()}>
        {loading ? 'Loading...' : 'Show More'}
      </button>
  }
  </div>);
}


export const params = {
  page: 1,
};

export default graphql(
  MEIZITU_LIST,
  {
    options: {
      variables: params,
    },
    props: ({ data }) => ({
      data,
      loadMore: () => {
        return data.fetchMore({
          variables: {
            page: Math.floor(data.list.length / 39) + 1,
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
      },
    }),
  },
)(PostList);
