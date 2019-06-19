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
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { SAY_DETAIL } from '@/graphql/schema/say';
import { useQuery } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import Html from '@/components/Html';
import { formatTime, getTimeAgo } from '@/utils/common';
import useStyles from './styles';

function SayDetail({ router }) {
  const classes = useStyles();
  const { data, error, loading, refetch } = useQuery(SAY_DETAIL, router.query);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div>
        {`Error! ${error.message}`}
        <Button onClick={() => { refetch({ _id: id }); }}>refetch</Button>
      </div>
    );
  }

  const { data: { user, title, cover, html, url, content, showHtml, appCode, appName, photos, createdAt } } = data;

  return (
    <div>
      <Card>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={8}>
            <CardContent>
              <Typography variant="h6">{content}</Typography>
              <Typography variant="body2" component="p">{`${getTimeAgo(createdAt)}发布`}</Typography>
              <Typography variant="body2" component="p">技术 / 前端 / React</Typography>
            </CardContent>
          </Grid>
          <Divider />
          <Grid item xs={12} sm={12} md={4}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Avatar aria-label="Avatar" src={user.avatarUrl} className={classes.avatar}>{user.nickname}</Avatar>
                <Box mr={2} />
                <Box>
                  <Typography variant="h6">{user.nickname}</Typography>
                  <Typography variant="body2" component="p">华人生活网 | 前端</Typography>
                  <Box mt={1} display="flex">
                    <Button variant="contained" size="small" color="primary">关注</Button>
                    <Box mr={2} />
                    <Button variant="outlined" size="small" color="primary">私信</Button>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
      <br />
      <Card>
        <CardContent>
          <Typography variant="body2">{content}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default withRouter(SayDetail);