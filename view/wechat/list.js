import React from 'react';
import { graphql } from 'react-apollo';
import Item from './item';
import { WECHAT_LIST } from '../../graphql/wechat';

function PostList({
  data: {
    loading, error, list,
  }, loadMore,
}) {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (<div>
    {
      list.map(i => (
        <Item key={i._id} {...i} />
      ))
    }


    {
    //   !isEnd && <button onClick={() => loadMore()}>
    //   {loading ? 'Loading...' : 'Show More'}
    // </button>
  }
  </div>);
}


export const params = {
  name: '人民日报',
};

export default graphql(
  WECHAT_LIST,
  {
    options: {
      variables: params,
    },
    props: ({ data }) => ({
      data,
      loadMore: () => {
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
      },
    }),
  },
)(PostList);
