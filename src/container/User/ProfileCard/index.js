import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useMutation } from '@/hooks/graphql';
import { USERINFO } from '@/graphql/schema/user';
import { useOnMount } from '@/hooks';

function EditeUserInfo() {
  const [ getUserInfo, getUserInfoData ] = useMutation(USERINFO);

  useOnMount(async () => {
    if (!getUserInfoData.called) {
      await getUserInfo();
    }
  });

  if (!getUserInfoData.called || getUserInfoData.loading) return 'loging';
  if (getUserInfoData.hasError) return getUserInfoData.error;

  const { userInfo } = getUserInfoData.data;

  return (
    <Card>
      <Box>
        <Box p={2} px={4} display="flex" justifyContent="center" alignItems="center">
          <Avatar
            src={userInfo.avatarUrl}
            style={{ border: '1px #fff solid', boxShadow: '1px 2px 3px rgba(0,0,0,0.2)', width: 64, height: 64 }}
          />
          <Box flex={1} ml={1}>
            <Typography style={{ fontSize: 14, fontWeight: 'bold', padding: 0 }}>{userInfo.nickname}</Typography>
            <Typography variant="caption">{userInfo.sign || '这是懒人~'}</Typography>
          </Box>
        </Box>

        <Divider />

        <Box p={2} py={1} display="flex" justifyContent="space-around">
          <Box>
            <Typography align="center" style={{ fontSize: 10, color: '#789', fontWeight: 300 }}>动态</Typography>
            <Typography align="center" style={{ fontSize: 18, color: '#666', fontWeight: 500 }}>998</Typography>
          </Box>
          <Box>
            <Typography align="center" style={{ fontSize: 10, color: '#789', fontWeight: 300 }}>关注</Typography>
            <Typography align="center" style={{ fontSize: 18, color: '#666', fontWeight: 500 }}>233</Typography>
          </Box>
          <Box>
            <Typography align="center" style={{ fontSize: 10, color: '#789', fontWeight: 300 }}>粉丝</Typography>
            <Typography align="center" style={{ fontSize: 18, color: '#666', fontWeight: 500 }}>999+</Typography>
          </Box>
        </Box>
      </Box>
    </Card>
  );
}

export default EditeUserInfo;
