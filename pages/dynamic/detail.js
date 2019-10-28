import React from 'react';
import withApollo from '@/lib/apollo';
import withLayout from '@/hoc/layout';
import Content from '@/container/Dynamic/Detail';

function Index() {
  return (
    <Content />
  );
}

export default withApollo(withLayout(Index));
