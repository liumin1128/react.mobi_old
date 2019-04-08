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
                page: (Math.floor(list.length / 24) || 1) + 1,
                search,
              },
              updateQuery,
            });

            return (
              <Grid container className={classes.root} spacing={16}>
                {list
                  .map((i, index) => (
                  <Grid key={i.id} item xs={12} md={ 4}>
                    <Grid container spacing={16}>
                      <Grid item xs={12} md={ 12}>
                        <CardMedia
                          style={{
                            paddingTop: index === 0 ? '45%' : '55%',
                            backgroundColor: 'rgba(0,0,0,0.05)'
                          }}
                          image={i.cover}
                        />
                      </Grid>
                      <Grid item xs={12} md={ 12}>

                        <div>
                          <Typography variant="h6" gutterBottom>{i.title}</Typography>

                          <Typography variant="body1" gutterBottom>{getLessStr(i.description, index === 0 ? 140 : 60)}</Typography>
                        </div>
                        <CardHeader
                          avatar={(
                            <Avatar aria-label="Recipe">
                              {i.source[0]}
                            </Avatar>
                          )}
                          title={i.source}
                          subheader={formatTime(i.date, 'MM月DD日 HH:mm 星期')}
                          style={{ paddingLeft: 0 }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            );
          }}
        </Query>
    );
  }
}
