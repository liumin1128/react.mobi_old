import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import DynamicList from '@/container/Dynamic/List';
import DynamicCreate from '@/container/Dynamic/Create';
import DynamicTopics from '@/container/Dynamic/Topics';
import NavTabs from '@/components/NavTabs';

function Index() {
  return (
    <>
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
              { label: '最新', pathname: '/' },
              { label: '最热', pathname: '/2' },
            ]}
          />
        </Box>
      </Card>
      <Box mb={1.5} />
      <DynamicList />
    </>
  );
}

Index.Sider = DynamicTopics;

export default Index;
