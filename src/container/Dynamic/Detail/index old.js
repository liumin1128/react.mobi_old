import React from 'react';
import { withRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
// import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { DYNAMIC_DETAIL } from '@/graphql/schema/dynamic';
import { useQuery } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import Avatar from '@/components/Avatar';
import Html from '@/components/Html';
import { formatTime, getTimeAgo } from '@/utils/common';
import Comment from '@/container/Comment';
import { text2html, topics2Html } from '../utils';

import useStyles from './styles';

function DynamicDetail({ router }) {
  const classes = useStyles();
  const { data, error, loading, refetch } = useQuery(DYNAMIC_DETAIL, router.query);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div>
        {`Error! ${error.message}`}
        <Button onClick={() => { refetch({ _id: id }); }}>refetch</Button>
      </div>
    );
  }

  const { data: { user, pictures, content, createdAt, topics = [], _id } } = data;

  const html = topics2Html(text2html(content), topics);

  return (
    <div>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="body1" gutterBottom component="div">
                <div className={classes.html} dangerouslySetInnerHTML={{ __html: html }} />
              </Typography>
              {pictures.length > 0 && pictures.map((i) => <img alt="" key={i} className={classes.picture} src={i} />)}
            </CardContent>
          </Card>
          <Box mt={2} />
          <Comment _id={_id} />
        </Grid>


        <Grid item xs={12} sm={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Avatar
                  size={48}
                  nickname={user.nickname}
                  avatarUrl={user.avatarUrl}
                />
                <Box mr={2} />
                <Box>
                  <Typography variant="h6">{user.nickname}</Typography>
                  <Typography variant="body2" component="p">{user.sign || '这个用户很懒~'}</Typography>
                  <Box mt={1} display="flex">
                    <Button variant="outlined" size="small" color="primary">关注</Button>
                    <Box mr={2} />
                    {/* <Button variant="default" size="small" color="primary">私信</Button> */}
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </div>
  );
}


export default withRouter(DynamicDetail);
