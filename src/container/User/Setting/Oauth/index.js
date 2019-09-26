import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';

import { useMutation } from '@/hooks/graphql';
import { USERINFOWITHOAUTH } from '@/graphql/schema/user';
import Loading from '@/components/Loading';
import { useOnMount } from '@/hooks';

const oauthList = [
  { key: 'github', title: 'Github', icon: 'https://imgs.react.mobi/FitOmAQE-Ulzbzg3ba2cNRohbhCk' },
  { key: 'qq', title: 'QQ', icon: 'https://imgs.react.mobi/Fj2wmuujbWAz70-kIxa-8dNCDOrB' },
  { key: 'wechat', title: '微信', icon: 'https://imgs.react.mobi/FoRb0_NUH0SrLH6-UfD0jXQnzecd' },
  { key: 'weibo', title: '微博', icon: 'https://imgs.react.mobi/Fk_dlrKcrqzUU4PJdtJRoR2VAkP7' },
  { key: 'outlook', title: '微软', icon: 'https://imgs.react.mobi/FsRmgY99IhggoAUEEGPWG7JMnkWO' },
];


function EditeUserInfo() {
  const [ getUserInfo, userInfoData ] = useMutation(USERINFOWITHOAUTH, { ssr: false });

  useOnMount(async () => {
    if (!userInfoData.called) {
      await getUserInfo();
    }
  });

  if (!userInfoData.called || userInfoData.loading) return <Loading />;
  if (userInfoData.hasError) return userInfoData.error;

  const { userInfo } = userInfoData.data;

  const list = oauthList.map((i) => {
    const idx = userInfo.oauths.findIndex((j = {}) => j.from === i.key);

    const hasBind = idx !== -1;
    let desc = '未绑定';

    if (hasBind) {
      const json = JSON.parse(userInfo.oauths[idx].userInfo);

      switch (i.key) {
        case 'github': {
          desc = `已绑定：${json.login}`;
          break;
        }
        default: {
          desc = '已绑定';
        }
      }
    }

    return {
      ...i,
      hasBind,
      desc,
    };
  });


  return (
    <Box p={4} width={1} display="flex" justifyContent="center">
      <Box maxWidth={360} minWidth={200} width={1}>

        <Typography variant="h6">{userInfo.nickname}</Typography>

        <Box ml={-2} mt={2}>
          <List>
            {list.map((i) => {
              return (
                <ListItem key={i.key}>
                  <ListItemAvatar>
                    <Avatar style={{ padding: 2, borderRadius: 0 }} src={i.icon} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={i.title}
                    secondary={i.hasBind ? i.desc : '未绑定'}
                  />
                  {!i.hasBind && (
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="comments">
                        <LinkIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  )}
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
}

export default EditeUserInfo;
