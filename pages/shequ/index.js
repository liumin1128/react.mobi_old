import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import SayList from '@/container/Say/List';
import SayCreate from '@/container/Say/Create';
import NavTabs from '@/components/NavTabs';

function Index() {
  return (
    <Fragment>
      <Card>
        <NavTabs
          navList={[
            { label: 'switch', pathname: '/' },
            { label: 'ps4', pathname: '/ps4' },
            { label: 'cosplay', pathname: '/cos' },
          ]}
        />
      </Card>
      <Box pb={2} />
      <SayList />
    </Fragment>
  );
}

Index.Sider = SayCreate;

export default Index;
