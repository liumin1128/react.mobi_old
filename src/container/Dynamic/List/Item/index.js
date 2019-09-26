import React, { Fragment, useState } from 'react';
import Router from 'next/router';

import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
// import ButtonBase from '@material-ui/core/ButtonBase';
import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
// import Popper from '@material-ui/core/Popper';
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
import Popper from '@/components/Popper';

import useStyles from './styles';
import { text2html, topics2Html } from '../../utils';


function DynamicListItem({ _id, content, pictures = [], iframe, topics, user = {}, zanCount, zanStatus, commentCount, createdAt, zan, del, userInfo = {} }) {
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

  function edit() {
    Router.push(`/dynamic/edit?_id=${_id}`);
  }

  const { avatarUrl, nickname } = user || { nickname: ' 遁入虚空的用户' };

  return (
    <Fragment key={_id}>
      <Card className={classes.card}>
        <Box p={3} pb={0}>
          <CardHeader
            className={classes.header}
            avatar={(<Avatar aria-label="Avatar" src={avatarUrl} className={classes.avatar}>{nickname[0]}</Avatar>)}
            action={(
              <Popper
                placement="bottom-end"
                content={(
                  <Paper elevation={2}>
                    <MenuList>
                      {user._id === userInfo._id && (
                        <>
                          <MenuItem className={classes.MenuItem} onClick={edit}>编辑</MenuItem>
                          <MenuItem
                            className={classes.MenuItem}
                            onClick={() => {
                              del(_id);
                            }}
                          >
                          删除
                          </MenuItem>
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
            title={<Typography variant="h6" className={classes.nickname}>{nickname}</Typography>}
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

            {pictures && pictures.length > 0 && (
              <Box my={1.5} maxWidth={360}>
                <Pictures pictures={pictures} />
              </Box>
            )}

            {iframe && (
              <>
                <Box my={1.5} style={{ boxShadow: '0 10px 20px 0 rgba(0,0,0,0.3)' }}>
                  <Iframe iframe={iframe} />
                </Box>
              </>
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


          {showComment && (
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
          )}
        </Box>


      </Card>
      <Box mb={1.5} />
    </Fragment>
  );
}

export default DynamicListItem;
