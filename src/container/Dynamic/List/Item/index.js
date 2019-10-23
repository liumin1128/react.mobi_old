import React, { Fragment, useState } from 'react';
import Router from 'next/router';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import Pictures from '@/container/Dynamic/components/Pictures';
import Iframe from '@/container/Dynamic/components/Iframe';
import InfoButton from '@/components/Button/Info';
import { getTimeAgo } from '@/utils/common';
// import CreateComment from '@/container/Comment/Create';
// import CommentList from '@/container/Comment/List';
import { DYNAMIC_LIST } from '@/graphql/schema/dynamic';
import Popper from '@/components/Popper';
import Avatar from '@/components/Avatar';
import Link from '@/components/Link';
import useStyles from './styles';
import { text2html, topics2Html } from '../../utils';


function DynamicListItem({
  // 详情
  _id, content, pictures = [], iframe, topics, user = {}, createdAt,
  // 互动数据
  zanCount, zanStatus, commentCount,
  // 互动操作
  zan, del, follow,
  // 用户信息
  userInfo = {},
}) {
  const _user = (user && user._id) ? user : { nickname: ' 遁入虚空的用户' };

  const classes = useStyles();
  const [ showComment, setShowComment ] = useState(false);

  function toogleShow() {
    setShowComment(!showComment);
  }

  const html = topics2Html(text2html(content), topics);

  function goToDeatil(e) {
    if (e.target.nodeName === 'A') {
      e.stopPropagation();
    } else {
      Router.push(`/dynamic/detail?_id=${_id}`);
    }
  }

  function onEdit() {
    Router.push(`/dynamic/edit?_id=${_id}`);
  }

  function onDel() {
    del(_id);
  }

  function onFollow() {
    follow(_user._id);
  }


  return (
    <Fragment key={_id}>
      <Card className={classes.card}>
        <Box p={3} pb={0}>
          <CardHeader
            className={classes.header}
            avatar={(
              <Link
                href={`/user/profile?path=dynamic&user=${_user._id}`}
                as={`/user/profile/dynamic/${_user._id}`}
              >
                <Avatar
                  size={48}
                  avatarUrl={_user.avatarUrl}
                  nickname={_user.nickname}
                />
              </Link>
            )}
            title={(
              <Link
                href={`/user/profile?path=dynamic&user=${_user._id}`}
                as={`/user/profile/dynamic/${_user._id}`}
              >
                <Typography variant="h6" className={classes.nickname}>{_user.nickname}</Typography>

              </Link>
            )}
            subheader={getTimeAgo(createdAt)}
            action={(
              <Popper
                placement="bottom-end"
                content={(
                  <Paper elevation={2}>
                    <MenuList>

                      {user && _user._id && (
                        <>
                          {_user._id === userInfo._id ? (
                            <>
                              <MenuItem className={classes.MenuItem} onClick={onEdit}>编辑</MenuItem>
                              <MenuItem className={classes.MenuItem} onClick={onDel}>删除</MenuItem>
                            </>
                          ) : (
                            <>
                              <MenuItem className={classes.MenuItem} onClick={onFollow}>关注</MenuItem>
                            </>
                          )}
                        </>
                      )}
                      <MenuItem
                        className={classes.MenuItem}
                        onClick={() => {
                          alert('coming soon...');
                        }}
                      >
                        举报
                      </MenuItem>
                    </MenuList>
                  </Paper>
                )}
              >
                <IconButton aria-label="Settings">
                  <MoreVertIcon />
                </IconButton>
              </Popper>
            )}

          />
          <Box className={classes.content}>

            {html && (
              <Box my={1.5} onClick={goToDeatil}>
                <Typography variant="body1" component="div">
                  <div className={classes.html} dangerouslySetInnerHTML={{ __html: html }} />
                </Typography>
              </Box>
            )}

            {pictures && pictures.length > 0 && (
              <Box my={1.5}>
                <Pictures pictures={pictures} />
              </Box>
            )}

            {iframe && (
              <Box my={1.5}>
                <Iframe iframe={iframe} />
              </Box>
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
                onClick={() => { zan(_id, zanStatus); }}
                className={zanStatus ? classes.primary : ''}
              />
            </Box>
          </Box>


          {/* {showComment && (
            <Box>
              <Divider />
              <Box ml={8} mt={3} className={classes.content}>
                <CreateComment
                  session={_id}
                  autoFocus
                  update={(store) => {
                    const data = store.readQuery({ query: DYNAMIC_LIST });
                    const idx = data.list.findIndex((i) => i._id === _id);
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
          )} */}
        </Box>


      </Card>
      <Box mb={1.5} />
    </Fragment>
  );
}

export default DynamicListItem;
