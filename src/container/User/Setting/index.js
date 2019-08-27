import React, { useState } from 'react';
import dynamic from 'next/dynamic'
import { useRouter, withRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import Loading from '@/components/Loading'

const list = [
  { label: '用户信息', value: '/' },
  { label: '修改密码', value: '/password' },
  { label: '绑定邮箱', value: '/email' },
  { label: '绑定手机号', value: '/phone' },
];

const Email = dynamic(() => import('./Email'), { loading: Loading, ssr: false });
const Phone = dynamic(() => import('./Phone'), { loading: Loading, ssr: false })
const Password = dynamic(() => import('./Password'), { loading: Loading, ssr: false })
const UserInfo = dynamic(() => import('./UserInfo'), { loading: Loading, ssr: false })

const useStyles = makeStyles((theme) => {
  return {
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
    tab: {
      alignItems: 'flex-end',
      paddingRight: theme.spacing(2),
    },
    selected: {
      backgroundColor: theme.palette.primary.a100,
      color: theme.palette.primary.main,
    },
  };
});


function SystemSettings({ children, router }) {
  // console.log(router)
  const { path = '/' } = router.query
  const classes = useStyles();
  const [ value, setValue ] = useState(path);

  return (
    <Card>
      <Box display="flex">
        <Box width={248} minHeight={500} py={4} className={classes.tabs}>
          <Tabs
            orientation="vertical"
            variant="scrollable"
            indicatorColor="primary"
            value={value}
            aria-label="Vertical tabs example"
            onChange={(_, _path) => {
              setValue(_path);
              router.push('/user/setting?path='+_path, '/user/setting'+_path);
            }}
          >
            {list.map(i => (
              <Tab
                key={i.value}
                label={i.label}
                value={i.value}
                id={`vertical-tab-${i.value}`}
                aria-controls={`vertical-tabpanel-${i.value}`}
                classes={{ 
                  wrapper: classes.tab,
                  selected: classes.selected 
                }}
              />
            ))}
          </Tabs>
        </Box>

        <Box width={1}>
          {value === '/' && <UserInfo />}
          {value === '/password' && <Password />}
          {value === '/email' && <Email />}
          {value === '/phone' && <Phone />}
        </Box>
      </Box>
    </Card>

  );
}

export default withRouter(SystemSettings);
