
import React from 'react';
import GridList from '@/container/News/List/GridList';
import NavTabs from '@/components/NavTabs';
// import FlatList from '@/container/News/List/FlatList';

function Index() {
  return (
    <>
      <NavTabs
        navList={[
          { label: 'switch', pathname: '/' },
          { label: 'ps4', pathname: '/ps4' },
          { label: 'cosplay', pathname: '/cos' },
        ]}
      />
      <br />
      <GridList />
    </>
  );
}

// Index.Sider = FlatList;

export default Index;
