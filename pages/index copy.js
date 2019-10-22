import React from 'react';
import { withApollo } from '@/lib/apollo';
import DynamicList from '@/container/Dynamic/List';

function Index() {
  return (
    <>
      <DynamicList />
    </>
  );
}

Index.Sider = () => (
  <>
    222
  </>
);

export default withApollo(Index);
