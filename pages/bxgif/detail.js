import React from 'react';
import Content from '@/container/Bxgif/Detail';
import withApollo from '@/lib/apollo';
import withLayout from '@/hoc/layout';

function Index() {
  return (
    <Content />
  );
}

export default withApollo(withLayout(Index));
