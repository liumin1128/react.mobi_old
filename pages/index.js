
import React, { Fragment } from 'react';
import GridList from '@/container/News/List/GridList';
import NavTabs from '@/components/NavTabs';
// import FlatList from '@/container/News/List/FlatList';

function Index() {
  return (
    <Fragment>
      <NavTabs
        navList={[
          { label: 'switch', pathname: '/' },
          { label: 'ps4', pathname: '/ps4' },
          { label: 'cosplay', pathname: '/cos' },
        ]}
      />
      <br />
      <GridList />
    </Fragment>
  );
}

// Index.Sider = FlatList;

export default Index;
