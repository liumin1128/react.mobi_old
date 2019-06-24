import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Loading from '@/components/Loading';
import { SAY_LIST } from '@/graphql/schema/say';
import { useQuery } from '@/hooks/graphql';
import { getTimeAgo } from '@/utils/common';
import Item from './Item';
import useStyles from './styles';

function SayList({ router }) {
  const classes = useStyles();
  const { data, error, loading, isLoadingMore, loadMore } = useQuery(SAY_LIST, router.query);

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const { list } = data;

  return (
    <Fragment>
      {list.map(i => (
        <Fragment>
          <Box mx={2}>
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
                  <Typography variant="body" gutterBottom component="p" className={classes.content}>好喜欢～～～～～～～～～～～～～～～～～·好喜欢～～～～～～～～～～～～～～～～～·好喜欢～～～～～～～～～～～～～～～～～·好喜欢～～～～～～～～～～～～～～～～～·</Typography>
                  <Typography variant="caption" component="p">{getTimeAgo(i.createdAt)}</Typography>

                  <Box p={3} className={classes.replay}>
                    <Box display="flex">
                      <Box mr={2}>
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
                        <Typography variant="body" gutterBottom component="p" className={classes.content}>
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
                        <Typography variant="caption" component="p">{getTimeAgo(i.createdAt)}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Divider variant="inset" />
          </Box>
        </Fragment>
      ))}
    </Fragment>
  );
}


export default withRouter(SayList);