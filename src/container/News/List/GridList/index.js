import React, { PureComponent, Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
import Link from '@/components/Link';
import Loading from '@/components/Loading';
import { updateQuery } from '@/graphql/utils';
import { useQuery } from 'react-apollo-hooks';

import useStyles from './styles';
import useLoadMore from './useLoadMore';


function NewsList({ router }) {
  const classes = useStyles();

  const { search, tag, type } = router.query;
  const { data, error, loading, fetchMore } = useQuery(NEWS_LIST, { search, tag, type });
  const [ isLoadingMore, loadMore ] = useLoadMore(fetchMore, data, { search, tag, type });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <Fragment>
      <Grid container spacing={3}>
        {data.list.map((i, index) => (
          <Grid key={i._id} item xs={12} md={4}>
            <Link href={`/news/detail?_id=${i._id}`}>
              <CardMedia className={classes.cover} image={i.cover || Array.isArray(i.photos) ? i.photos[0] : ''} />
              <Typography variant="subtitle2" color="textPrimary" className={classes.title}>{i.title}</Typography>
            </Link>

            {

            // <Box display="flex" alignItems="center">
            //   <Typography variant="caption" gutterBottom style={{ marginRight: 8 }}>{i.appName}</Typography>
            //   <Typography variant="caption" gutterBottom style={{ flex: 1 }}>{getTimeAgo(i.createdAt)}</Typography>
              // <IconButton color="inherit" aria-label="More" aria-haspopup="true">
              //   <MoreHorizIcon fontSize="small" color="inherit" />
              // </IconButton>
            // </Box>
            }

          </Grid>
        ))}
      </Grid>

      {isLoadingMore ? <Loading /> : <Waypoint onEnter={loadMore} />}
    </Fragment>
  );
}


export default withRouter(NewsList);
