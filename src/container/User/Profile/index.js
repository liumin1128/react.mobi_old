import Link from 'next/link';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Button from '@material-ui/core/Button';
import DynamicList from '@/container/Dynamic/List';
import NavTabs from '@/components/NavTabs';
import Loading from '@/components/Loading';
import { useMutation } from '@/hooks/graphql';
import { USERINFO } from '@/graphql/schema/user';
import { useOnMount } from '@/hooks';
import useStyles from './styles';

function Profile() {
  const classes = useStyles();

  const [ getUserInfo, getUserInfoData ] = useMutation(USERINFO);

  useOnMount(async () => {
    if (!getUserInfoData.called) {
      await getUserInfo();
    }
  });

  if (!getUserInfoData.called || getUserInfoData.loading) {
    return <Loading />;
  }

  if (getUserInfoData.hasError) {
    return JSON.stringify(getUserInfoData.error);
  }

  const { userInfo } = getUserInfoData.data;

  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth={600} width={1}>
        <Card>
          <Box className={classes.root} p={2} />
          <Avatar
            className={classes.avatar}
            src={userInfo.avatarUrl}
          />
          <Box mt={1} />
          <Typography variant="h6" align="center">{userInfo.nickname}</Typography>
          <Box mt={1} />

          {/* <Typography variant="body1" align="center">{userInfo.sign}</Typography> */}
          <Box display="flex">
            <NavTabs
              navList={[
                { label: '动态', pathname: '/' },
                { label: '关注', pathname: '/2' },
                { label: '收藏', pathname: '/3' },
              ]}
            />
          </Box>

        </Card>

        <Box mt={2} />
        <DynamicList />
      </Box>

    </Box>
  );
}

export default Profile;
