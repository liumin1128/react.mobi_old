import React from 'react';
import { graphql } from 'react-apollo';
import Item from './item';
import { SAY_LIST } from '../../graphql/say';

function PostList({
  data: {
    loading, error, list, meta,
  }, loadMore,
}) {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const isEnd = meta.count <= list.length;
  return (<div>

    {
      list.map(i => <Item key={i._id} {...i} />)
    }

    {!isEnd && <button onClick={() => loadMore()}>
      {loading ? 'Loading...' : 'Show More'}
    </button>}
  </div>);
}


export const params = {
  skip: 0,
  first: 5,
};

export default graphql(
  SAY_LIST,
  {
    options: {
      variables: params,
    },
    props: ({ data }) => ({
      data,
      loadMore: () => {
        console.log('data');
        console.log(data);
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
