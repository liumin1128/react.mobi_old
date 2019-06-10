import React, { PureComponent, Fragment } from 'react';
import Masonry from 'react-masonry-component';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { BXGIF_LIST } from '@/graphql/schema/bxgif';
import { useQuery } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import Item from './item';

const useStyles = makeStyles(theme => ({
  list: {
    // [theme.breakpoints.down('xs')]: {
    margin: -theme.spacing(),
    // },
  },
  item: {
    width: '100%',
    display: 'block',
    // padding: theme.spacing() * 1,
    // [theme.breakpoints.down('xs')]: {
    padding: theme.spacing(),
    // },
  },
}));

function BxgigList() {
  const classes = useStyles();

  const { data, error, loading, isLoadingMore, loadMore } = useQuery(BXGIF_LIST, { }, { ssr: false });

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const { list } = data;

  return (
    <Fragment>
      <Masonry className={classes.list}>
        {list.map(i => (
          <Grid key={i._id} className={classes.item} item xs={6} sm={4} lg={3}>
            <Item {...i} />
          </Grid>
        ))}
      </Masonry>
      {isLoadingMore ? <Loading /> : <Waypoint onEnter={loadMore} />}
    </Fragment>
  );
}

export default BxgigList;
