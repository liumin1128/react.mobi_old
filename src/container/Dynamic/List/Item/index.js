import React, { Fragment, useState } from 'react';
import Router from 'next/router';

import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
// import ButtonBase from '@material-ui/core/ButtonBase';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Pictures from '@/container/Dynamic/components/Pictures';
import Iframe from '@/container/Dynamic/components/Iframe';
import InfoButton from '@/components/Button/Info';
// import Link from '@/components/Link';
import { getTimeAgo } from '@/utils/common';
import CreateComment from '@/container/Comment/Create';
import CommentList from '@/container/Comment/List';
import { DYNAMIC_LIST } from '@/graphql/schema/dynamic';
import { ZAN } from '@/graphql/schema/zan';
import { useMutation } from '@/hooks/graphql';
import Snackbar from '@/components/Snackbar';

import useStyles from './styles';
import { text2html, topics2Html } from '../../utils';


function DynamicListItem({ _id, content, pictures = [], iframe, topics, user, zanCount, zanStatus, commentCount, createdAt }) {
  const classes = useStyles();
  const [ isShow, setShow ] = useState(false);

  function toogleShow() {
    setShow(!isShow);
  }

  const [ zan ] = useMutation(ZAN, { _id }, {
    optimisticResponse: { result: { status: zanStatus ? 201 : 200, message: '创建成功', __typename: 'Result' } },
    update: (store, { data: { result: { status: code, message } } }) => {
      if (code === 200 || code === 201) {
        const data = store.readQuery({ query: DYNAMIC_LIST });
        const num = { 200: 1, 201: -1 };
        const sta = { 200: true, 201: false };
        const idx = data.list.findIndex(i => i._id === _id);
        data.list[idx].zanCount += num[code];
        data.list[idx].zanStatus = sta[code];
        store.writeQuery({ query: DYNAMIC_LIST, data });
      } else {
        Snackbar.error(message);
      }
    },
  });

  const html = topics2Html(text2html(content), topics);

  function goToDeatil(e) {
    if (e.target.nodeName === 'A') {
      e.stopPropagation();
    } else {
      Router.push(`/dynamic/detail?_id=${_id}`);
    }
  }

  return (
    <Fragment key={_id}>
      <Card className={classes.card}>
        <Box p={3} pb={0}>
          <CardHeader
            className={classes.header}
            avatar={(<Avatar aria-label="Avatar" src={user.avatarUrl} className={classes.avatar}>{user.nickname}</Avatar>)}
            action={(<IconButton aria-label="Settings"><MoreVertIcon /></IconButton>)}
            title={<Typography variant="h6" className={classes.nickname}>{user.nickname}</Typography>}
            subheader={getTimeAgo(createdAt)}
          />
          <Box className={classes.content}>

            {html && (
              <Box my={1.5} onClick={goToDeatil}>
                <Typography variant="body1" component="div">
                  <div className={classes.html} dangerouslySetInnerHTML={{ __html: html }} />
                </Typography>
              </Box>
            )}


            <Box my={1.5}>
              <Pictures pictures={pictures} />
            </Box>

            {iframe && (
              <Fragment>
                <Box my={1.5}>
                  <Iframe iframe={iframe} />
                </Box>
              </Fragment>
            )}

            <Box my={2.5} display="flex" style={{ color: '#999' }}>
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


          {isShow && (
            <Box>
              <Divider />
              <Box ml={8} mt={3} className={classes.content}>
                <CreateComment
                  session={_id}
                  autoFocus
                  update={(store) => {
                    const data = store.readQuery({ query: DYNAMIC_LIST });
                    const idx = data.list.findIndex(i => i._id === _id);
                    data.list[idx].commentCount += 1;
                    store.writeQuery({ query: DYNAMIC_LIST, data });
                  }}
                />
                <Box my={3} />
                <Divider />
              </Box>
              <Box my={2}>
                <CommentList session={_id} />
              </Box>
            </Box>
          )}
        </Box>


      </Card>
      <Box mb={1.5} />
    </Fragment>
  );
}

export default DynamicListItem;
