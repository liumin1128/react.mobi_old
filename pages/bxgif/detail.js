

import React, { PureComponent } from 'react';
import Layout from '@/components/layout';
import List from '@/view/bxgif/list';

export default class DxgifDetail extends PureComponent {
  render() {
    console.log('this.props');
    console.log(this.props);
    return (
      <Layout>
        <List />
      </Layout>
    );
  }
}
