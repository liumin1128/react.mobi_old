import React from 'react';
import { withApollo } from '@/lib/apollo';
import Content from '@/container/Dynamic/Detail';

function DynamicDetail() {
  return (
    <Content />
  );
}

export default withApollo(DynamicDetail);
