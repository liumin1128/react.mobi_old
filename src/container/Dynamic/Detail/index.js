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
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { DYNAMIC_DETAIL } from '@/graphql/schema/dynamic';
import { useQuery } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import Html from '@/components/Html';
import { formatTime, getTimeAgo } from '@/utils/common';
import Comment from '@/container/Comment';
import InfoButton from '@/components/Button/Info';
import CreateComment from '@/container/Comment/Create';
import CommentList from '@/container/Comment/List';
import Pictures from '../components/Pictures';
import { text2html } from '../utils';
import Item from '../List/Item';

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

  const { data: { user, pictures, content, createdAt, topics = [], _id, zanCount, zanStatus, commentCount } } = data;

  let html = text2html(content);

  topics.map((i) => {
    const reg = new RegExp(`#${i.title}#`);
    html = html.replace(reg, `<a href="/dynamic?topic=${i.number}" class="MuiTypography-root MuiLink-root MuiLink-underlineNone MuiTypography-colorPrimary">#${i.title}#</a>`);
  });

  console.log(user);

  return (
    <div>
      <Box display="flex" justifyContent="center">
        <Box style={{ width: '100%' }} maxWidth={600}>
          <Card>
            <Box p={3} pb={1}>
              <CardHeader
                className={classes.header}
                avatar={(<Avatar aria-label="Avatar" src={user.avatarUrl} className={classes.avatar}>{user.nickname}</Avatar>)}
                action={(<IconButton aria-label="Settings"><MoreVertIcon /></IconButton>)}
                title={<Typography variant="h6" className={classes.nickname}>{user.nickname}</Typography>}
                subheader={getTimeAgo(createdAt)}
              />
              <Box mt={1} ml={8}>
                <Box>
                  <Typography variant="body1" gutterBottom component="div">
                    <div className={classes.html} dangerouslySetInnerHTML={{ __html: html }} />
                  </Typography>
                </Box>

                <Pictures pictures={pictures} />

                <Box mb={2} display="flex" style={{ color: '#999' }}>
                  <InfoButton
                    label={commentCount || null}
                    icon={ChatBubbleOutlineIcon}
                    onClick={() => { toogleShow(); }}
                  />
                  <Box mr={5} />
                  <InfoButton
                    label={zanCount || null}
                    icon={zanStatus ? ThumbUpIcon : ThumbUpOutlinedIcon}
                    onClick={() => { zan(); }}
                    className={zanStatus ? classes.primary : ''}
                  />
                </Box>
              </Box>
            </Box>
            <Divider />
            <Box p={3} mt={1}>
              <Box ml={8}>
                <CreateComment
                  session={_id}
                  // update={(store) => {
                  //   const data = store.readQuery({ query: DYNAMIC_LIST });
                  //   const idx = data.list.findIndex(i => i._id === _id);
                  //   data.list[idx].commentCount += 1;
                  //   store.writeQuery({ query: DYNAMIC_LIST, data });
                  // }}
                />
                <Box my={3} />
                <Divider />
              </Box>
              <CommentList session={_id} />
            </Box>

          </Card>

        </Box>
      </Box>
    </div>
  );
}


export default withRouter(DynamicDetail);
