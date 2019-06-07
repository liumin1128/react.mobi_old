import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'next/router';
import { Query } from 'react-apollo';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { NEWS_LIST } from '@/graphql/schema/news';
import { getTimeAgo } from '@/utils/common';
import Link from '@/components/Link'
import Loading from '@/components/Loading'
import { updateQuery } from '@/graphql/utils';

const appLogo = {
  '3dmgame.com': 'https://imgs.react.mobi/FhyQn2l-CNmlB-Oxi9pXvm0vZqSJ',
  'toutiao.com': 'https://imgs.react.mobi/Fk0vSrOldS7bHybywpj3pKXTMWEZ',
  'eastday.com': 'https://imgs.react.mobi/FvCrL3RB16fjHafbjXhrrg3zOmGA',
  'qq.com': 'https://imgs.react.mobi/FkIgsT1b8qL52F8fKidNimDhKUJB',
};


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

                <Grid container spacing={2}>
                  {list
                    .map((i, index) => (
                    <Grid key={i._id} item xs={12} md={4}>
                      <Link href={"/news/detail?_id="+i._id}>
                        <CardMedia
                          style={{
                            paddingTop: '56%',
                            backgroundColor: 'rgba(0,0,0,0.05)',
                            marginBottom: 12,
                            borderRadius: 4
                          }}
                          image={i.cover || Array.isArray(i.photos) ? i.photos[0] : ''  }
                        />
                        <Typography 
                          variant="subtitle2" 
                          color="textPrimary" 
                          style={{ overflow: 'hidden' }}
                        >
                          {i.title}
                        </Typography>

                      </Link>

                      <div style={{display: 'flex', alignItems: 'center'}}>
                        <Typography variant="caption" gutterBottom style={{marginRight: 8}}>
                          {i.appName}
                        </Typography>
                        <Typography variant="caption" gutterBottom style={{flex: 1}}>
                          {getTimeAgo(i.createdAt)}
                        </Typography>
                        
                        <IconButton
                          // size="small"
                          color="inherit"
                          aria-label="More"
                          aria-haspopup="true"
                        >
                          <MoreHorizIcon fontSize="small" color="inherit" />
                        </IconButton>
                      </div>

                    </Grid>
                  ))}
                </Grid>
                <Loading />
                <Waypoint onEnter={loadMore} />
              </Fragment>
            );
          }}
        </Query>
    );
  }
}
