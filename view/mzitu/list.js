import React from 'react';
import { graphql } from 'react-apollo';
import Grid from 'material-ui/Grid';
import Item from './item';
import { MZITU_LIST } from '../../graphql/mzitu';

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
        list.map(i => (<Grid item xs={12} sm={6} md={4}>
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
  page: 1,
};

export default graphql(
  MZITU_LIST,
  {
    options: {
      variables: params,
    },
    props: ({ data }) => ({
      data,
      loadMore: () => {
        return data.fetchMore({
          variables: {
            page: Math.floor(data.list.length / 24) + 1,
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
