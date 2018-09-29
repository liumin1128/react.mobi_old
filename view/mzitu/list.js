import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import Waypoint from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Item from './item';
import { MZITU_LIST } from '@/graphql/schema/mzitu';
import { updateQuery } from '@/graphql/utils';

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

@withStyles(styles)
export default class MzituList extends PureComponent {
  render() {
    const { query = {}, classes } = this.props;
    const { search, tag } = query;
    return (
      <Fragment>
        <Query
          query={MZITU_LIST}
          variables={{ search, tag }}
        >

          {({ loading, error, data = {}, fetchMore }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            const { list = [] } = data;

            const loadMore = () => fetchMore({
              variables: {
                page: (Math.floor(list.length / 24) || 1) + 1,
                search,
              },
              updateQuery,
            });

            return (<Fragment>
              {' '}
              <Grid container spacing={16}>

                {list.map(i => (
                  <Grid
                    key={i._id}
                    className={classes.item}
                    item
                    xs={6}
                    sm={4}
                  >
                    <Item {...i} />
                  </Grid>
                ))}
              </Grid>

              <Waypoint onEnter={loadMore} />
              <CircularProgress
                color="secondary"
                className={classes.progress}
              />
            </Fragment>
            );
          }}
        </Query>

      </Fragment>
    );
  }
}
