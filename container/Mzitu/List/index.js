import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { MZITU_LIST } from '@/graphql/schema/mzitu';
import { updateQuery } from '@/graphql/utils';
import Item from './Item';

const styles = theme => ({
  progress: {
    margin: `${theme.spacing.unit * 2}px auto`,
    display: 'block',
    // backgroundColor: 'red',
    maxWidth: '24px',
    maxHeight: '24px',
  },
  item: {
    marginBottom: 8
  }
});

@withRouter
@withStyles(styles)
export default class MzituList extends PureComponent {
  render() {
    const { router, classes } = this.props;
    const { search, tag } = router.query;
    return (
        <Query
          query={MZITU_LIST}
          variables={{ search, tag }}
        >
          {({ loading, error, data = {}, fetchMore, refetch }) => {
            if (loading) return 'Loading...';
            if (error) {
              return (
                <div>
                  {`Error! ${error.message}`}
                  <a onClick={() => { refetch({ search, tag }); }}>refetch</a>
                </div>
              );
            }
            const { list = [] } = data;

            const loadMore = () => fetchMore({
              variables: {
                page: (Math.floor(list.length / 24) || 1) + 1,
                search,
              },
              updateQuery,
            });

            return (<Fragment>
              <Grid spacing={16} container className={classes.list}>
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
              <br/>
              <CircularProgress
                color="secondary"
                className={classes.progress}
              />
              <Waypoint onEnter={loadMore} />
            </Fragment>
            );
          }}
        </Query>
    );
  }
}
