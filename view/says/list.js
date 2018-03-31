import React from 'react';
import { graphql } from 'react-apollo';
import Item from './item';
import { SAY_LIST } from '../../graphql/say';

function PostList({
  data: {
    loading, error, says, _saysMeta,
  }, loadMore,
}) {
  if (error) return 'error';
  if (loading) return 'loading';
  const isEnd = _saysMeta.count <= says.length;
  return (<div>

    {
      says.map(i => <Item {...i} />)
    }

    {!isEnd && <button onClick={() => loadMore()}>
      {loading ? 'Loading...' : 'Show More'}
    </button>}
  </div>);
}


export const params = {
  skip: 0,
  first: 3,
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
            skip: data.says.length,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }
            return {
              ...fetchMoreResult,
              says: [
                ...previousResult.says,
                ...fetchMoreResult.says,
              ],
            };
          },
        });
      },
    }),
  },
)(PostList);
