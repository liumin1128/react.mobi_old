import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import { useQuery } from 'react-apollo-hooks';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';

import { MZITU_LIST } from '@/graphql/schema/mzitu';
import { useLoadMore } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import Item from './Item';

function MzituList({ router }) {
  const { search, tag, type } = router.query;
  const { data, error, loading, fetchMore } = useQuery(MZITU_LIST, { search, tag, type });
  const [ isLoadingMore, loadMore ] = useLoadMore(fetchMore, data, { search, tag, type });

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const { list } = data;

  return (
    <Fragment>
      <Grid spacing={2} container>
        {list.map(i => (
          <Grid key={i._id} item xs={6} sm={4}>
            <Item {...i} />
          </Grid>
        ))}
      </Grid>
      {isLoadingMore ? <Loading /> : <Waypoint onEnter={loadMore} />}
    </Fragment>
  );
}

export default withRouter(MzituList);
