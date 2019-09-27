import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useRouter, withRouter } from 'next/router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { NOTIFACATION_LIST } from '@/graphql/schema/notification';
import { useQuery, useMutation } from '@/hooks/graphql';
import Loading from '@/components/Loading';
import Link from '@/components/Link';
import { getTimeAgo } from '@/utils/common';

import NavTabs from '@/components/NavTabs';


import useStyles from './styles';

const navList = [
  { label: '未读', value: 'unread' },
  { label: '全部', value: 'all' },
  { label: '系统消息', value: 'system' },
];


function Profile({ router }) {
  const classes = useStyles();
  const { query } = router;
  const { type } = query;

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

  const { data, error, loading, isLoadingMore, isEnd, loadMore } = useQuery(NOTIFACATION_LIST, params, { ssr: false });
  if (loading) return <Loading />;
  const { list } = data;
  console.log(data);
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

          {list.map(({
            _id, actionor, user, createdAt, path,
            actionShowText, actionorShowText, userShowText,
          }) => {
            return (
              <Box mb={2} key={_id}>
                <Card
                  className={classes.card}
                  // elevation={2}
                >
                  <CardHeader
                    className={classes.header}
                    avatar={(<Avatar src={actionor.avatarUrl}>{actionor.nickname}</Avatar>)}
                    title={<Typography variant="h6" style={{ fontSize: 14 }}>{actionor.nickname}</Typography>}
                    subheader={<Typography variant="caption" style={{ fontSize: 12 }}>{getTimeAgo(createdAt)}</Typography>}
                    action={<Button color="primary" variant="outlined" size="small">关注</Button>}
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
        </Box>
      </Box>
    </>
  );
}

export default withRouter(Profile);
