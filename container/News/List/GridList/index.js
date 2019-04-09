import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router';
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
import { formatTime } from '@/utils/common';
import Link from '@/components/Link'

@withRouter
export default class NewsList extends PureComponent {
  render() {
    const { router } = this.props;
    const { search, tag, type } = router.query;
    return (
        <Query
          query={NEWS_LIST}
          variables={{ search, tag, type }}
        >
          {({ loading, error, data = {}, fetchMore, refetch }) => {

            if (loading) return <CircularProgress color="secondary" />

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
                skip: list.length,
                search,
              },
              updateQuery,
            });

            return (
              <Fragment>

                <Grid container spacing={16}>
                  {list
                    // .slice(0, 4)
                    .map((i, index) => (
                    <Grid key={i._id} item xs={12} md={4}>
                      <Link to={"/news/detail?_id="+i._id}>
                        <CardMedia
                          style={{
                            paddingTop: '55%',
                            backgroundColor: 'rgba(0,0,0,0.05)',
                            marginBottom: 16
                          }}
                          image={i.cover || Array.isArray(i.photos) ? i.photos[0] : ''  }
                        />
                        <Typography variant="h6">{i.title}</Typography>
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
                      </Link>
                    </Grid>
                  ))}
                </Grid>
                <CircularProgress color="secondary" />
                <Waypoint onEnter={loadMore} />
              </Fragment>
            );
          }}
        </Query>
    );
  }
}
