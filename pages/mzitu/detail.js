import React from 'react';
import Content from '@/container/Mzitu/Detail';
import Sider from '@/container/Mzitu/Sider';
import withApollo from '@/lib/apollo';
import withLayout from '@/hoc/layout';

function Index() {
  return (
    <Content />
  );
}

Index.Sider = Sider;

export default withApollo(withLayout(Index));
