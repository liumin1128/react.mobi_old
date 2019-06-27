import React, { Fragment } from 'react';
import { withRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Loading from '@/components/Loading';
import { COMMENT_LIST } from '@/graphql/schema/comment';
import { useQuery } from '@/hooks/graphql';
import { getTimeAgo } from '@/utils/common';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import Item from './Item';
import useStyles from './styles';

function SayList({ _id }) {
  const classes = useStyles();
  const { data, error, loading, isLoadingMore, loadMore } = useQuery(COMMENT_LIST, { commentTo: _id });

  if (loading) return <Loading />;
  if (error) return <div>{error.message}</div>;

  const { list } = data;

  console.log('list');
  console.log(list);

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
              <Item
                data={i}
                targetId={_id}
              />
              {i.replys && i.replys.length > 0 && (
                <Box ml={9} p={4} className={classes.replay}>
                  {i.replys.map((j, jdx) => (
                    <Fragment key={j._id}>
                      {jdx !== 0 && (
                        <Box my={3}>
                          <Divider variant="inset" />
                        </Box>
                      )}
                      <Item
                        data={j}
                        // 评论id
                        commentTo={i._id}
                        // 目标id，用于写入存缓
                        targetId={_id}
                      />
                    </Fragment>
                  ))}
                </Box>
              )}
            </Box>
          </Fragment>
        ))}
      </Box>
    </Fragment>
  );
}


export default SayList;
