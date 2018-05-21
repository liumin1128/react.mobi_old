import React from 'react';
import { graphql } from 'react-apollo';
import Grid from '@material-ui/core/Grid';
import Waypoint from 'react-waypoint';
// import Masonry from '@/components/masonry';
import { DOYOGIF_LIST } from '@/graphql/doyogif';
import { updateQuery } from '@/graphql';
import Button from '@/components/loading/button';
import Item from './item';

function PostList({
  data: {
    loading, error, list,
  }, loadMore,
}) {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (<div style={{ margin: '0px' }}>
    <Grid container spacing={16}>
      {
        list.map(i => (<Grid
          key={i._id}
          item
          xs={6}
          sm={3}
        >
          <Item {...i} />
        </Grid>))
      }
    </Grid>
    <Button onClick={() => loadMore()}>
      加载更多
    </Button>

  </div>);
}


export default graphql(
  DOYOGIF_LIST,
  {
    options: {
      variables: {
        skip: 0,
      },
    },
    props: ({ data }) => ({
      data,
      loadMore: () => data.fetchMore({
        variables: {
          skip: data.list.length,
        },
        updateQuery,
      }),
    }),
  },
)(PostList);
