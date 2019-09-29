import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DynamicList from '@/container/Dynamic/List';
import Loading from '@/components/Loading';
import { useMutation } from '@/hooks/graphql';
import { USERINFO } from '@/graphql/schema/user';
import { useOnMount } from '@/hooks';
import useStyles from './styles';

function Profile() {
  const classes = useStyles();
  const router = useRouter();
  const { query } = router;
  const { path = 'dynamic' } = query;
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

  const navList = [
    { label: `动态 ${userInfo.dynamic}`, value: 'dynamic' },
    { label: `关注 ${userInfo.follow}`, value: 'follow' },
    { label: `粉丝 ${userInfo.fans}`, value: 'fans' },
  ];

  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth={600} width={1}>
        <Card>
          <Box className={classes.root} p={2} />
          <Avatar
            className={classes.avatar}
            src={userInfo.avatarUrl}
          />
          <Box p={3} pt={2} pb={2}>
            <Typography variant="h6">{userInfo.nickname}</Typography>
            <Typography variant="caption">{userInfo.sign}</Typography>
          </Box>
          <Divider />
          <Box px={1}>
            <Tabs
              value={path}
              onChange={(e, val) => {
                router.push(`/user/profile?path=${val}`, `/user/profile/${val}`);
              }}
              classes={{ indicator: classes.indicator }}
              TabIndicatorProps={{ children: <div /> }}
            >
              {navList.map((i) => (
                <Tab
                  key={i.key || i.label}
                  label={i.label}
                  value={i.value}
                  classes={{
                    root: classes.tab,
                    selected: classes.selected,
                  }}
                />
              ))}
            </Tabs>
          </Box>


        </Card>

        <Box mt={2} />

        {path === 'dynamic' && <DynamicList query={{ user: userInfo._id }} />}
        {/* {path === 'dynamic' && <DynamicList />} */}
      </Box>

    </Box>
  );
}

export default Profile;
