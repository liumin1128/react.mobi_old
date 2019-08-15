import React from 'react';
import { withRouter } from 'next/router';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { DYNAMIC_DETAIL } from '@/graphql/schema/dynamic';
import { ZAN } from '@/graphql/schema/zan';
import { useQuery, useMutation } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import { getTimeAgo } from '@/utils/common';
import InfoButton from '@/components/Button/Info';
import CreateComment from '@/container/Comment/Create';
import CommentList from '@/container/Comment/List';
import Snackbar from '@/components/Snackbar';
import Pictures from '../components/Pictures';
import { text2html, topics2Html } from '../utils';

import useStyles from './styles';

function DynamicDetail({ router }) {
  const classes = useStyles();
  const { data, error, loading, refetch } = useQuery(DYNAMIC_DETAIL, router.query);

  // 赞状态异常
  const [ zan ] = useMutation(ZAN);

  if (loading) return <Loading />;

  const { data: { user, pictures, content, createdAt, topics = [], _id, zanCount, zanStatus, commentCount } } = data;

  if (error) {
    return (
      <div>
        {`Error! ${error.message}`}
        <Button onClick={() => { refetch({ _id }); }}>refetch</Button>
      </div>
    );
  }

  const html = topics2Html(text2html(content), topics);

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
                    // onClick={() => { toogleShow(); }}
                  />
                  <Box mr={5} />
                  <InfoButton
                    label={zanCount || null}
                    icon={zanStatus ? ThumbUpIcon : ThumbUpOutlinedIcon}
                    onClick={() => {
                      zan(
                        { _id },
                        {
                          optimisticResponse: { result: { status: zanStatus ? 201 : 200, message: '创建成功', __typename: 'Result' } },
                          update: (store, { data: { result: { status: code, message } } }) => {
                            if (code === 200 || code === 201) {
                              const temp = store.readQuery({ query: DYNAMIC_DETAIL, variables: router.query });
                              const num = { 200: 1, 201: -1 };
                              const sta = { 200: true, 201: false };
                              temp.data.zanCount += num[code];
                              temp.data.zanStatus = sta[code];
                              store.writeQuery({ query: DYNAMIC_DETAIL, data: temp, variables: router.query });
                            } else {
                              Snackbar.error(message);
                            }
                          },
                        },
                      );
                    }}
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
                  update={(store) => {
                    const temp = store.readQuery({ query: DYNAMIC_DETAIL, variables: router.query });
                    temp.data.commentCount += 1;
                    store.writeQuery({ query: DYNAMIC_DETAIL, data: temp, variables: router.query });
                  }}
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
