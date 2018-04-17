import React from 'react';
import { graphql } from 'react-apollo';
import Grid from 'material-ui/Grid';
import Waypoint from 'react-waypoint';
import Masonry from '../../components/masonry';
import Item from './item';
import { BXGIF_LIST } from '../../graphql/bxgif';
import { updateQuery } from '../../graphql';
import Button from '../../components/loading/button';

function PostList({
  data: {
    loading, error, list,
  }, loadMore,
}) {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (<div style={{ margin: '0px' }}>
    <Masonry style={{ margin: '8px -8px' }}>
      {
      list.map(i => (<Grid
        key={i._id}
        style={{
          padding: '8px',
          width: '100%',
          display: 'block',
        }}
        item
        xs={6}
        sm={4}
        lg={3}
      >
        <Item {...i} />
      </Grid>))
    }
    </Masonry>


    <Button onClick={() => loadMore()}>
      加载更多
    </Button>

  </div>);
}


export default graphql(
  BXGIF_LIST,
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
