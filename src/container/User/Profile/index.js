import Box from '@material-ui/core/Box';
import { useRouter } from 'next/router';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DynamicList from '@/container/Dynamic/List';
import Follow from '@/container/User/Follow';
import Fans from '@/container/User/Fans';
import Loading from '@/components/Loading';
import { useMutation, useQuery } from '@/hooks/graphql';
import { USERINFO_BY_ID } from '@/graphql/schema/user';
import { FOLLOW } from '@/graphql/schema/follow';
import Snackbar from '@/components/Snackbar';
import useStyles from './styles';

function Profile() {
  
  const classes = useStyles();
  const router = useRouter();
  const { query } = router;
  const { path = 'dynamic', user } = query;

  const data = useQuery(USERINFO_BY_ID, { _id: user }, { ssr: false });

  const [ follow ] = useMutation(FOLLOW);

  if (data.loading) return <Loading />;
  if (data.error) return data.error;

  const { userInfo } = data.data;

  const navList = [
    { label: `动态 ${userInfo.dynamic}`, value: 'dynamic' },
    { label: `关注 ${userInfo.follow}`, value: 'follow' },
    { label: `粉丝 ${userInfo.fans}`, value: 'fans' },
  ];

  function onFollow(_id, followStatus) {
    follow({ _id }, {
      optimisticResponse: { result: { status: followStatus ? 201 : 200, message: '关注成功', __typename: 'Result' } },
      update: (store, { data: { result: { status: code, message } } }) => {
        try {
          if (code === 200 || code === 201) {
            Snackbar.error(message);
            const sta = { 200: true, 201: false };
            const temp = store.readQuery({ query: USERINFO_BY_ID, variables: { _id: user } });
            temp.userInfo.followStatus = sta[code];
            store.writeQuery({ query: USERINFO_BY_ID, variables: { _id: user }, data: temp });
          } else {
            Snackbar.error(message);
          }
        } catch (error) {
          console.log('error');
          console.log(error);
        }
      },
    });
  }

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
            <Box display="flex" justifyContent="space-between">
              <Typography variant="h6">{userInfo.nickname}</Typography>
              <Button
                color="primary"
                size="small"
                variant={userInfo.followStatus ? 'outlined' : 'contained'}
                onClick={() => { onFollow(userInfo._id, userInfo.followStatus); }}
              >
                {userInfo.followStatus ? '取消关注' : '关注'}
              </Button>
            </Box>
            <Typography variant="caption">{userInfo.sign}</Typography>

          </Box>
          <Divider />
          <Box px={1}>
            <Tabs
              value={path}
              onChange={(e, val) => {
                router.push(`/user/profile?path=${val}&user=${user}`, `/user/profile/${val}/${user}`);
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

        {path === 'dynamic' && <DynamicList variables={{ user: userInfo._id }} />}
        {path === 'follow' && <Follow variables={{ user: userInfo._id }} />}
        {path === 'fans' && <Fans variables={{ user: userInfo._id }} />}
      </Box>

    </Box>
  );
}

export default Profile;
