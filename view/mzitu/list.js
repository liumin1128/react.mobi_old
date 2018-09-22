import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Waypoint from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Item from './item';
import hocNossr from '@/hoc/hocNossr';
import { MZITU_LIST } from '@/graphql/schema/mzitu';
import { listQuery } from '@/graphql/utils';

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

@hocNossr(listQuery(MZITU_LIST))
@withStyles(styles)
export default class MzituList extends PureComponent {
  render() {
    const { data = {}, classes, fetchMore } = this.props;
    const { loading = true, error, list = [] } = data;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <Fragment>
        <Grid container spacing={16}>

          {list.map(i => (
            <Grid
              key={i._id}
              className={classes.item}
              item
              xs={6}
              sm={4}
              lg={3}
            >
              <Item {...i} />
            </Grid>
          ))}
        </Grid>

        <Waypoint onEnter={fetchMore} />
        <CircularProgress color="secondary" className={classes.progress} />
      </Fragment>
    );
  }
}
