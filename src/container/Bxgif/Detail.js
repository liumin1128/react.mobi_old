import React from 'react';
import { withRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { BXGIF_DETAIL } from '@/graphql/schema/bxgif';
import { useQuery } from '@/hooks/graphql';
import Loading from '@/components/Loading';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    marginBottom: theme.spacing(3),
    margin: '0 auto',
  },
  load: {
    padding: 0,
    margin: '0 auto',
    display: 'block',
    width: '100%',
    height: 0,
    overflow: 'hidden',
    background: 'rgba(0,0,0,0.05)',
  },
  media: {
    height: 0,
  },
}));

function NewsDetail({ router }) {
  const classes = useStyles();

  const { _id } = router.query;
  const { data, error, loading, refetch } = useQuery(BXGIF_DETAIL, { _id });

  if (loading) return <Loading />;

  if (error) {
    return (
      <div>
        {`Error! ${error.message}`}
        <Button onClick={() => { refetch({ _id }); }}>refetch</Button>
      </div>
    );
  }

  const { detail = {} } = data;

  return (
    <div className={classes.root}>
      <Typography align="center" variant="h6">{detail.title}</Typography>
      <br />
      {detail.list.map((i) => {
        const paddingTop = `${Math.floor((i.height / i.width) * 100)}%`;
        return (
          <Card key={i.url} className={classes.card}>
            <LazyLoad
              debounce={100}
              unmountIfInvisible
              placeholder={<div style={{ paddingTop }} className={classes.load} />}
            >
              <CardMedia
                className={classes.media}
                style={{ paddingTop }}
                image={i.url}
                title={`${i.width},${i.height}`}
              />
            </LazyLoad>
            <CardContent>
              <Typography component="p">{i.title}</Typography>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default withRouter(NewsDetail);
