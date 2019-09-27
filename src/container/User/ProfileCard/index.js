import React from 'react';
import Link from 'next/link';
import ContentLoader from 'react-content-loader';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
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


  if (!getUserInfoData.called || getUserInfoData.loading) {
    return (
      <Card>
        <ContentLoader
          width={282}
          height={152}
        // speed={10}
          primaryColor="#f3f3f3"
          secondaryColor="#ecebeb"
        >
          <circle cx={`${32 + 32}px`} cy={`${16 + 32}px`} r={`${32}px`} />

          <rect x={`${24 + 32 + 32 + 16}px`} y={`${32}px`} rx={`${4}px`} ry={`${4}px`} width={`${80}px`} height={`${14}px`} />

          <rect x={`${24 + 32 + 32 + 16}px`} y={`${32 + 24}px`} rx={`${4}px`} ry={`${4}px`} width={`${120}px`} height={`${10}px`} />

          <rect x={0} y={16 + 32 + 32 + 16} rx={1} ry={1} width={'100%'} height={1} />

          <rect x={16} y={16 + 32 + 32 + 24 + 16} rx={4} ry={4} width={50} height={20} />

          <rect x={16 + 90} y={16 + 32 + 32 + 24 + 16} rx={4} ry={4} width={50} height={20} />

          <rect x={16 + 170} y={16 + 32 + 32 + 24 + 16} rx={4} ry={4} width={50} height={20} />

        </ContentLoader>
      </Card>
    );
  }

  if (getUserInfoData.hasError) {
    return (
      <Card>
        <Box p={2} display="flex" justifyContent="center">
          <Link href="/login/register"><Button color="primary" variant="outlined">注册</Button></Link>
          <Box ml={1} />
          <Link href="/login"><Button color="primary" variant="contained">登录</Button></Link>
        </Box>
      </Card>
    );
  }

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

        <Box p={2} py={1} display="flex" justifyContent="space-around" alignItems="center">
          <Box>
            <Typography align="center" style={{ fontSize: 10, color: '#789', fontWeight: 300 }}>动态</Typography>
            <Typography align="center" style={{ fontSize: 18, color: '#666', fontWeight: 500 }}>998</Typography>
          </Box>
          <Divider orientation="vertical" style={{ height: 24 }} />
          <Box>
            <Typography align="center" style={{ fontSize: 10, color: '#789', fontWeight: 300 }}>关注</Typography>
            <Typography align="center" style={{ fontSize: 18, color: '#666', fontWeight: 500 }}>233</Typography>
          </Box>
          <Divider orientation="vertical" style={{ height: 24 }} />
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
