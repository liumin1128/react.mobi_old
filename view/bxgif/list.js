import React, { PureComponent, Fragment } from 'react';
import Masonry from 'react-masonry-component';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

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
    padding: theme.spacing.unit * 1,
    width: '100%',
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing.unit * 0.5,
    },
  },
});

@hocNossr(listQuery(BXGIF_LIST))
@withStyles(styles)
export default class test extends PureComponent {
  render() {
    const { data = {}, classes } = this.props;
    const { loading = true, error, list = [] } = data;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <Fragment>
        <Masonry className={classes.list}>
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
        </Masonry>
      </Fragment>
    );
  }
}
