import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { getTimeAgo } from '@/utils/common';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import Create from '../../Create';
import useStyles from './styles';

function SayList({ commentTo, _id, user = {}, content, createdAt }) {
  const classes = useStyles();
  const [ isShow, setShow ] = useState(false);
  function toogleShow() {
    setShow(!isShow);
  }
  return (
    <Box display="flex">
      <Box mr={3}>
        <Avatar aria-label="Avatar" src={user.avatarUrl} className={classes.avatar}>
          {user.nickname}
        </Avatar>
      </Box>
      <Box flexGrow={1}>
        <Typography variant="h6" gutterBottom className={classes.name}>{user.nickname}</Typography>
        <Typography variant="body2" component="p" className={classes.content}>{content}</Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2">{getTimeAgo(createdAt)}</Typography>
          <Box color="#666">
            <IconButton aria-label="Delete" color="inherit" onClick={toogleShow}>
              <ModeCommentIcon fontSize="small" style={{ fontSize: 15 }} />
            </IconButton>
            {0}
            <Box px={1} display="inline" />
            <IconButton aria-label="Delete" color="inherit">
              <ThumbUpIcon fontSize="small" style={{ fontSize: 15 }} />
            </IconButton>
            {15}
          </Box>
        </Box>
        {isShow && <Create commentTo={commentTo || _id} replyTo={_id} />}
      </Box>
    </Box>
  );
}

export default SayList;
