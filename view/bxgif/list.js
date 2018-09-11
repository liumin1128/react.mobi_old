import React, { PureComponent, Fragment } from 'react';
import Masonry from 'react-masonry-component';
import Waypoint from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import hocNossr from '@/hoc/hocNossr';
import { BXGIF_LIST } from '@/graphql/schema/bxgif';
import { listQuery } from '@/graphql/utils';
import Item from './item';

const styles = theme => ({
  list: {
    [theme.breakpoints.down('xs')]: {
      margin: theme.spacing.unit * 0.5,
    },
  },
  item: {
    width: '100%',
    display: 'block',
    padding: theme.spacing.unit * 1,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 0.5,
    },
  },
  progress: {
    margin: `${theme.spacing.unit * 2}px auto`,
    display: 'block',
  },
});

@hocNossr(listQuery(BXGIF_LIST))
@withStyles(styles)
export default class BxgifList extends PureComponent {
  render() {
    const { data = {}, classes, fetchMore } = this.props;
    const { loading = true, error, list = [] } = data;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <Fragment>
        <Masonry className={classes.list}>
          {list.map(i => (
            <Grid key={i._id} className={classes.item} item xs={6} sm={4} lg={3}>
              <Item {...i} />
            </Grid>
          ))}
        </Masonry>
        <Waypoint
          onEnter={fetchMore}
        />
        <CircularProgress color="secondary" className={classes.progress} />
      </Fragment>
    );
  }
}
