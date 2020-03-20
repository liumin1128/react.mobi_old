import React from "react";
import { withRouter } from "next/router";
import { Waypoint } from "react-waypoint";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";

import Link from "@/components/Link";
import Loading from "@/components/Loading";
import { NEWS_LIST } from "@/graphql/schema/news";
import { useQuery } from "@/hooks/graphql";
import useStyles from "./styles";

function NewsList({ router }) {
  const classes = useStyles();
  const { data, error, loading, isLoadingMore, loadMore } = useQuery(
    NEWS_LIST,
    router.query
  );

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const { list, meta } = data;

  return (
    <>
      <Grid container spacing={3}>
        {list.map(i => (
          <Grid key={i._id} item xs={12} sm={6} md={4}>
            <Link href={`/news/detail?_id=${i._id}`}>
              <CardMedia
                className={classes.cover}
                image={i.cover || Array.isArray(i.photos) ? i.photos[0] : ""}
              />
              <Typography
                variant="body2"
                color="textPrimary"
                className={classes.title}
              >
                {i.title}
              </Typography>
            </Link>
          </Grid>
        ))}
      </Grid>

      <Box my={2}>
        {list.length < meta.count ? (
          <Box>
            {isLoadingMore ? <Loading /> : <Waypoint onEnter={loadMore} />}
          </Box>
        ) : (
          <Typography align="center" variant="caption" component="p">
            ~ 这是人家的底线 ~
          </Typography>
        )}
      </Box>
    </>
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
