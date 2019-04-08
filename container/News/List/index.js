import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { NEWS_LIST } from '@/graphql/schema/news';
import { updateQuery } from '@/graphql/utils';
import Item from './Item';

@withRouter
export default class NewsList extends PureComponent {
  render() {
    const { router, classes } = this.props;
    const { search, tag, type } = router.query;
    return (
        <Query
          query={NEWS_LIST}
          variables={{ search, tag, type }}
        >
          {({ loading, error, data = {}, fetchMore, refetch }) => {
            if (loading) return <CircularProgress
            color="secondary"
            // className={classes.progress}
          />
            if (error) {
              return (
                <div>
                  {`Error! ${error.message}`}
                  <a onClick={() => { refetch({ search, tag }); }}>refetch</a>
                </div>
              );
            }

            console.log('data')
            console.log(data)

            const { list = [] } = data;

            const loadMore = () => fetchMore({
              variables: {
                page: (Math.floor(list.length / 24) || 1) + 1,
                search,
              },
              updateQuery,
            });

            return (<Fragment>
              {list
                  .slice(4,list.length)
                  .map(i => (
                <div key={i.id}>
                  <Item {...i} />
                </div>
              ))}
              <CircularProgress
                color="secondary"
                // className={classes.progress}
              />
              {
                // <Waypoint onEnter={loadMore} />
              }
            </Fragment>
            );
          }}
        </Query>
    );
  }
}
