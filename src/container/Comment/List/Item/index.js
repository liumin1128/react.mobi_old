import React, { useState, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import ModeCommentIcon from '@material-ui/icons/ModeCommentOutlined';
import Badge from '@material-ui/core/Badge';
import { DELETE_COMMENT, COMMENT_LIST } from '@/graphql/schema/comment';
import { ZAN } from '@/graphql/schema/zan';
import { useMutation } from '@/hooks/graphql';
import Snackbar from '@/components/Snackbar';
import { getTimeAgo } from '@/utils/common';
import { text2html } from '@/container/Dynamic/utils';
import Create from '../../Create/Reply';
import useStyles from './styles';

function Comment({ commentTo, session, data: { _id, user = {}, content, createdAt, replyTo, replyCount, zanCount, zanStatus } }) {
  const classes = useStyles();
  const [ isShow, setShow ] = useState(false);
  const deleteComment = useMutation(DELETE_COMMENT, { _id });
  const zan = useMutation(ZAN, { _id }, {
    optimisticResponse: { result: { status: zanStatus ? 201 : 200, message: '创建成功', __typename: 'Result' } },
    update: (store, { data: { result: { status: code, message } } }) => {
      if (code === 200 || code === 201) {
        const data = store.readQuery({ query: COMMENT_LIST, variables: { session } });
        const num = { 200: 1, 201: -1 };
        const sta = { 200: true, 201: false };
        if (replyTo) {
          // 如果是回复
          const idx = data.list.findIndex(i => i._id === commentTo);
          const jdx = data.list[idx].replys.findIndex(j => j._id === _id);
          data.list[idx].replys[jdx].zanCount += num[code];
          data.list[idx].replys[jdx].zanStatus = sta[code];
        } else {
          const idx = data.list.findIndex(i => i._id === commentTo);
          data.list[idx].zanCount += num[code];
          data.list[idx].zanStatus = sta[code];
        }
        store.writeQuery({ query: COMMENT_LIST, variables: { session }, data });
      } else {
        Snackbar.error(message);
      }
    },
  });

  function toogleShow() {
    setShow(!isShow);
  }

  const html = text2html(content);

  return (
    <Box display="flex" className={classes.root}>

      <Box mr={2}>
        <Avatar aria-label="Avatar" src={user.avatarUrl} className={classes.avatar}>
          {user.nickname}
        </Avatar>
      </Box>
      <Box flexGrow={1}>
        <Box display="flex">
          <Typography variant="h6" className={classes.name}>
            {user.nickname}
          </Typography>
        </Box>

        {/* 正文部分 */}
        <Box mt={1}>
          <Typography variant="body1" component="div" className={classes.content}>
            {replyTo && replyTo._id !== commentTo && replyTo.user && replyTo.user.nickname && (
            <Fragment>
              回复
              {' '}
              <b>
                {replyTo.user.nickname}
              :
              </b>
              {' '}
            </Fragment>
            )}
            <div className={classes.html} dangerouslySetInnerHTML={{ __html: html }} />
          </Typography>
        </Box>

        {/* 正文部分 */}


        <Box mb={-1} display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">{getTimeAgo(createdAt)}</Typography>
          <Typography variant="body2" component="div">
            <IconButton
              aria-label="Delete"
              color="inherit"
              className={`${classes['delete-comment']} delete-comment`}
              onClick={() => {
                deleteComment();
              }}
            >
              <DeleteIcon fontSize="small" style={{ fontSize: 14 }} />
            </IconButton>
            <Box px={0.5} display="inline" />
            <IconButton
              aria-label="Comment"
              color="inherit"
              onClick={toogleShow}
            >
              <Badge badgeContent={replyCount} classes={{ badge: classes.Badge }}>
                <ModeCommentIcon
                  fontSize="small"
                  style={{ fontSize: 14 }}
                />
              </Badge>
            </IconButton>
            <Box px={0.5} display="inline" />
            <IconButton
              aria-label="Zan"
              color="inherit"
              onClick={() => { zan(); }}
            >
              <Badge badgeContent={zanCount} classes={{ badge: classes.Badge }}>
                <ThumbUpIcon
                  color={zanStatus ? 'secondary' : undefined}
                  fontSize="small"
                  style={{ fontSize: 14 }}
                />
              </Badge>
            </IconButton>
          </Typography>
        </Box>

        {isShow && (
          <Create
            session={session}
            commentTo={commentTo}
            replyTo={_id} // 外部指定commentId，说明是回复
            callback={toogleShow}
            autoFocus
          />
        )}
      </Box>
    </Box>
  );
}

export default Comment;
