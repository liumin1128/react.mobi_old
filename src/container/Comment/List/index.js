import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Loading from '@/components/Loading';
import { SAY_LIST } from '@/graphql/schema/say';
import { useQuery } from '@/hooks/graphql';
import { getTimeAgo } from '@/utils/common';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import useStyles from './styles';

function SayList({ router }) {
  const classes = useStyles();
  const { data, error, loading, isLoadingMore, loadMore } = useQuery(SAY_LIST, router.query);

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const { list } = data;

  return (
    <Fragment>
      <Box mx={2} my={2} display="flex" alignItems="center">
        <Typography variant="body1" gutterBottom>全部评论</Typography>
        <Box mx={1} />
        <Typography variant="body2" gutterBottom>1</Typography>
      </Box>
      <Box mx={2}>

        {list.map((i, idx) => (
          <Fragment key={i._id}>
            {idx !== 0 && <Divider variant="inset" />}
            <Box my={4}>
              <Box display="flex">
                <Box mr={3}>
                  <Avatar
                    aria-label="Avatar"
                    src={i.user.avatarUrl}
                    className={classes.avatar}
                  >
                    {i.user.nickname}
                  </Avatar>
                </Box>
                <Box flexGrow={1}>
                  <Typography variant="h6" gutterBottom className={classes.name}>{i.user.nickname}</Typography>
                  <Typography variant="body2" component="p" className={classes.content}>好喜欢～～～～～～～～～～～～～～～～～·好喜欢～～～～～～～～～～～～～～～～～·好喜欢～～～～～～～～～～～～～～～～～·好喜欢～～～～～～～～～～～～～～～～～·</Typography>
                  <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Typography variant="body2">{getTimeAgo(i.createdAt)}</Typography>
                    <Box color="#666">
                      <IconButton aria-label="Delete" color="inherit">
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

                  <Box p={3} className={classes.replay}>
                    <Box display="flex">
                      <Box mr={3}>
                        <Avatar
                          aria-label="Avatar"
                          src={i.user.avatarUrl}
                          className={classes.avatar}
                        >
                          {i.user.nickname}
                        </Avatar>
                      </Box>
                      <Box flexGrow={1}>
                        <Typography variant="h6" gutterBottom className={classes.name}>{i.user.nickname}</Typography>
                        <Typography variant="body2" gutterBottom component="p" className={classes.content}>
                          回复
                          {' '}
                          <strong>
                            {i.user.nickname}
                            {' '}
                            ：
                          </strong>
                          {' '}
                          好喜欢～～～～～～～～～～～～～～～～～·好喜欢～～～～～～～～～～～～～～～～～·好喜欢～～～～～～～～～～～～～～～～～·好喜欢～～～～～～～～～～～～～～～～～·
                        </Typography>

                        <Box display="flex" justifyContent="space-between" alignItems="center">
                          <Typography variant="body2">{getTimeAgo(i.createdAt)}</Typography>
                          <Box color="#666">
                            <IconButton aria-label="Delete" color="inherit">
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
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Fragment>
        ))}
      </Box>

    </Fragment>
  );
}


export default withRouter(SayList);
