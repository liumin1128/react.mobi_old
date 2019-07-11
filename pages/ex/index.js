import React, { PureComponent } from 'react';
import Layout from '@/components/Layout/Base';
import List from '@/container/explore/list';

export default class Dynamics extends PureComponent {
  render() {
    return (
      <Layout>
        <List />
      </Layout>
    );
  }
}
