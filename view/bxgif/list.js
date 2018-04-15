import React from 'react';
import { graphql } from 'react-apollo';
import Grid from 'material-ui/Grid';
import Item from './item';
import { BXGIF_LIST } from '../../graphql/bxgif';

function PostList({
  data: {
    loading, error, list,
  }, loadMore,
}) {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (<div>
    <Grid container spacing={24}>
      {
        list.map(i => (<Grid item xs={6} sm={4}>
          <Item key={i._id} {...i} />
        </Grid>))
      }
    </Grid>


    {
      <button onClick={() => loadMore()}>
        {loading ? 'Loading...' : 'Show More'}
      </button>
  }
  </div>);
}


export const params = {
  skip: 0,
};

export default graphql(
  BXGIF_LIST,
  {
    options: {
      variables: params,
    },
    props: ({ data }) => ({
      data,
      loadMore: () => {
        return data.fetchMore({
          variables: {
            skip: data.list.length + 30,
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
