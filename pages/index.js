import React from 'react';
import Button from '@material-ui/core/Button';
import { withApollo } from '@/lib/apollo';
import DynamicList from '@/container/Dynamic/List';
import withLayout from '@/components/Layout/withLayout';

function Index() {
  return (
    <>
      <Button color="primary">Button</Button>
      <DynamicList />
    </>
  );
}

Index.Sider = () => (
  <>
    222
  </>
);

export default withApollo(withLayout(Index));
