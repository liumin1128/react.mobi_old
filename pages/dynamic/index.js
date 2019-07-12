import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import DynamicList from '@/container/Dynamic/List';
import DynamicCreate from '@/container/Dynamic/Create';
import NavTabs from '@/components/NavTabs';

function Index() {
  return (
    <Fragment>
      <Card>
        <Box p={2}>
          <DynamicCreate />
        </Box>
      </Card>
      <Box mb={1.5} />
      <Card>
        <Box px={1}>
          <NavTabs
            navList={[
              // { label: '推荐', pathname: '/' },
              { label: '最新', pathname: '/' },
              { label: '最热', pathname: '/2' },
              // { label: '前端', pathname: '/web' },
              // { label: '后端', pathname: '/node' },
              // { label: '游戏', pathname: '/game' },
              // { label: '动画', pathname: '/cartoon' },
              // { label: '电影', pathname: '/movie' },
              // { label: '读书', pathname: '/book' },
              // { label: '生活', pathname: '/life' },
            ]}
          />
        </Box>
      </Card>
      <Box mb={1.5} />
      <DynamicList />
    </Fragment>
  );
}

Index.Sider = DynamicCreate;

export default Index;
