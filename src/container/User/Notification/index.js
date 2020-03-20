import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useRouter } from 'next/router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NOTIFACATION_LIST } from '@/graphql/schema/notification';
import { useQuery, useMutation } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import Link from '@/components/Link';
import { getTimeAgo } from '@/utils/common';
import { FOLLOW } from '@/graphql/schema/follow';
import Snackbar from '@/components/Snackbar';
import Avatar from '@/components/Avatar';
import useStyles from './styles';

const navList = [
  { label: '未读', value: 'unread' },
  { label: '全部', value: 'all' },
  { label: '系统消息', value: 'system' },
];

function Profile() {
  const classes = useStyles();

  const router = useRouter();
  const { query } = router;
  const { type = 'all' } = query;

  let params = {};
  if (type === 'unread') {
    params = { unread: true };
  }
  if (type === 'all') {
    params = { };
  }
  if (type === 'system') {
    params = { type: 'system' };
  }

  const { data, loading, isLoadingMore, isEnd, loadMore } = useQuery(NOTIFACATION_LIST, params, { ssr: false });
  const [ follow ] = useMutation(FOLLOW);

  function onFollow(_id, followStatus) {
    follow({ _id }, {
      optimisticResponse: { result: { status: followStatus ? 201 : 200, message: '关注成功', __typename: 'Result' } },
      update: (store, { data: { result: { status: code, message } } }) => {
        if (code === 200 || code === 201) {
          Snackbar.error(message);
          const sta = { 200: true, 201: false };
          const temp = store.readQuery({ query: NOTIFACATION_LIST });
          const idx = temp.list.findIndex((i) => i.actionor._id === _id);
          temp.list[idx].actionor.followStatus = sta[code];
          store.writeQuery({ query: NOTIFACATION_LIST, data: temp });
        } else {
          Snackbar.error(message);
        }
      },
    });
  }

  if (loading) return <Loading />;
  const { list = [], meta } = data;

  return (
    <>
      <Box display="flex" justifyContent="center">
        <Box maxWidth={500} width="100%">
          <Card style={{ width: '100%' }}>
            <Box px={2}>
              <Tabs
                value={type}
                onChange={(e, val) => {
                  router.push(`/user/notification?type=${val}`, `/user/notification/${val}`);
                }}
                classes={{
                  indicator: classes.indicator,
                }}
                TabIndicatorProps={{ children: <div /> }}
              >
                {navList.map((i) => (
                  <Tab
                    key={i.key || i.label}
                    label={i.label}
                    value={i.value}
                    classes={{ root: classes.tab }}
                  />
                ))}
              </Tabs>
            </Box>
          </Card>

          <Box py={1} />

          {list && list.length > 0 && (
            <>
              {list.map(({
                _id, actionor, user, createdAt, path, type,
                actionShowText, actionorShowText, userShowText,
              }) => {
                return (
                  <Box mb={2} key={_id}>
                    <Card className={classes.card}>
                      <CardHeader
                        className={classes.header}
                        avatar={(<Avatar nickname={actionor.nickname} avatarUrl={actionor.avatarUrl} />)}
                        title={<Typography variant="h6" style={{ fontSize: 14 }}>{actionor.nickname}</Typography>}
                        subheader={<Typography variant="caption" style={{ fontSize: 12 }}>{getTimeAgo(createdAt)}</Typography>}
                        action={type === 'follow' ? (
                          <Button
                            color="primary"
                            variant={actionor.followStatus ? 'outlined' : 'contained'}
                            size="small"
                            onClick={() => { onFollow(actionor._id, actionor.followStatus); }}
                          >
                            {actionor.followStatus ? '取消关注' : '关注'}
                          </Button>
                        ) : null}
                      />
                      <Box ml={10} mb={3} mt={1} mr={3}>
                        <Typography variant="body2" color="textSecondary" component="p">
                          <span style={{ fontWeight: 'bold' }}>{actionShowText}</span>
                          {actionorShowText ? `： ${actionorShowText}` : ''}
                        </Typography>
                        {userShowText && (
                          <Link href={path || '/'}>
                            <Box p={1} px={2} mt={1} bgcolor="rgba(0, 0, 0, 0.03)">
                              <Typography variant="body2" color="inherit" component="p">
                                {`@${user.nickname}: ${userShowText}`}
                              </Typography>
                            </Box>
                          </Link>
                        )}
                      </Box>
                    </Card>
                  </Box>
                );
              })}

              {list.length < meta.count ? (
                <Button
                  fullWidth
                  onClick={() => loadMore()}
                  disabled={isLoadingMore}
                >
                  {`查看更多 - 剩余${meta.count - list.length}条`}
                </Button>
              ) : <Typography align="center">~ 这是人家的底线 ~</Typography>}
            </>
          )}

        </Box>
      </Box>
    </>
  );
}

export default Profile;
