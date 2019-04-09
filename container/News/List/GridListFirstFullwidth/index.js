import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router';
import { withStyles } from '@material-ui/core/styles';
import { Query } from 'react-apollo';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import { NEWS_LIST } from '@/graphql/schema/news';
import { updateQuery } from '@/graphql/utils';
import { getLessStr, formatTime } from '@/utils/common';
import Link from '@/components/Link'
const styles = theme => ({
  media: {
    display: 'block',
    width: 64,
    height: 64,
  },
  content: {
    flex: 1,
  },
});

@withRouter
@withStyles(styles)
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
                skip: list.length,
                search,
              },
              updateQuery,
            });

            return (
              <Fragment>

                <Grid container className={classes.root} spacing={16}>
                  {list
                    // .slice(0, 4)
                    .map((i, index) => (
                    <Grid key={i._id} item xs={12} md={index === 0 ? 12 : 4}>
                    <Link to={"/news/detail?_id="+i._id}>


                      <Grid container spacing={16}>

                        <Grid item xs={12} md={index === 0 ? 8 : 12}>
                          <CardMedia
                            style={{
                              paddingTop: index === 0 ? '45%' : '55%',
                              backgroundColor: 'rgba(0,0,0,0.05)'
                            }}
                            image={i.cover || Array.isArray(i.photos) ? i.photos[0] : ''  }
                          />
                        </Grid>
                        <Grid item xs={12} md={index === 0 ? 4 : 12}>

                          <div
                            style={{
                              height: index === 0 ? 260 :140
                            }}>
                            <Typography variant="h6" gutterBottom>{i.title}</Typography>
                            <Typography variant="body1" gutterBottom>{
                              getLessStr(i.content, index === 0 ? 180 : 60)
                              // i.content
                            }</Typography>
                          </div>
                          <CardHeader
                            avatar={(
                              <Avatar aria-label="Recipe">
                                {i.appName[0]}
                              </Avatar>
                            )}
                            title={i.appName}
                            subheader={formatTime(i.createdAt, 'MM月DD日 HH:mm 星期')}
                            style={{ paddingLeft: 0 }}
                          />
                        </Grid>
                      </Grid>
                      </Link>
                    </Grid>
                  ))}
                </Grid>
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
