import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import { Waypoint } from 'react-waypoint';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@/components/Link';
import Loading from '@/components/Loading';
import { NEWS_LIST } from '@/graphql/schema/news';
import { useQuery } from 'react-apollo-hooks';
import { useLoadMore } from '@/hooks/graphql';
import useStyles from './styles';

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
        {data.list.map(i => (
          <Grid key={i._id} item xs={12} md={4}>
            <Link href={`/news/detail?_id=${i._id}`}>
              <CardMedia className={classes.cover} image={i.cover || Array.isArray(i.photos) ? i.photos[0] : ''} />
              <Typography variant="subtitle2" color="textPrimary" className={classes.title}>{i.title}</Typography>
            </Link>
          </Grid>
        ))}
      </Grid>
      {isLoadingMore ? <Loading /> : <Waypoint onEnter={loadMore} />}
    </Fragment>
  );
}

export default withRouter(NewsList);


// <Box display="flex" alignItems="center">
//   <Typography variant="caption" gutterBottom style={{ marginRight: 8 }}>{i.appName}</Typography>
//   <Typography variant="caption" gutterBottom style={{ flex: 1 }}>{getTimeAgo(i.createdAt)}</Typography>
// <IconButton color="inherit" aria-label="More" aria-haspopup="true">
//   <MoreHorizIcon fontSize="small" color="inherit" />
// </IconButton>
// </Box>
