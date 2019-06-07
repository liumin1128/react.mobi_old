import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import { NEWS_LIST } from '@/graphql/schema/news';
import { updateQuery } from '@/graphql/utils';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';

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
              {list.map((i, index) => (
                <div key={i.id} className={classes.card}>
                  <div className={classes.flexGrow}>
                    <div>
                      <Typography variant="h6" gutterBottom>{i.title}</Typography>
                      <Typography variant="body1" gutterBottom>{getStrFromHtml(i.content, 50)}</Typography>
                    </div>
                    <CardHeader
                      avatar={(
                        <Avatar aria-label="Recipe">
                          R
                        </Avatar>
                      )}
                      title="Shrimp and Chorizo Paella"
                      subheader="September 14, 2016"
                      style={{ paddingLeft: 0 }}
                    />
                  </div>
                  <CardMedia style={{ display: 'block', width: 148, height: 148 }} image={i.photos[0]} />
                </div>
              ))}

              {
                // <CircularProgress
                // color="secondary"
                // className={classes.progress}
              // />
                // <Waypoint onEnter={loadMore} />
              }
            </Fragment>
            );
          }}
        </Query>
    );
  }
}
