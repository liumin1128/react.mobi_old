import React from 'react';
import { graphql } from 'react-apollo';
import Grid from 'material-ui/Grid';
import Masonry from '../../components/masonry';
import Item from './item';
import { BXGIF_LIST } from '../../graphql/bxgif';

function PostList({
  data: {
    loading, error, list,
  }, loadMore,
}) {
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return (<div style={{ margin: '-4px' }}>
    <Masonry>
      {
        list.map(i => (<Grid
          key={i._id}
          style={{
            padding: '8px',
            display: 'inline-block',
          }}
          item
          xs={6}
          sm={4}
        >
          <Item {...i} />
        </Grid>))
      }
    </Masonry>

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
