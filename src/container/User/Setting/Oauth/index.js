import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { useQuery } from '@apollo/react-hooks';
import { USERINFOWITHOAUTH } from '@/graphql/schema/user';
import Loading from '@/components/Loading';

const oauthList = [
  { key: 'github', title: 'Github', icon: 'https://imgs.react.mobi/FitOmAQE-Ulzbzg3ba2cNRohbhCk' },
  { key: 'qq', title: 'QQ', icon: 'https://imgs.react.mobi/Fj2wmuujbWAz70-kIxa-8dNCDOrB' },
  { key: 'wechat', title: '微信', icon: 'https://imgs.react.mobi/FoRb0_NUH0SrLH6-UfD0jXQnzecd' },
  { key: 'weibo', title: '微博', icon: 'https://imgs.react.mobi/Fk_dlrKcrqzUU4PJdtJRoR2VAkP7' },
  { key: 'outlook', title: '微软', icon: 'https://imgs.react.mobi/FsRmgY99IhggoAUEEGPWG7JMnkWO' },
];

function EditeUserInfo() {
  const { data, loading } = useQuery(USERINFOWITHOAUTH, { ssr: false });

  if (loading) return <Loading />;

  const { userInfo } = data;

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
                  {!i.hasBind ? (
                    <ListItemSecondaryAction>
                      <Button size="small" variant="contained" color="primary">立即绑定</Button>
                    </ListItemSecondaryAction>
                  ) : (
                    <ListItemSecondaryAction>
                      <Button size="small" color="inherit">解除绑定</Button>
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
