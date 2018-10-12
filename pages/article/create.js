import React, { PureComponent } from 'react';
import Layout from '@/components/Layout';
import Create from '@/view/say/create';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Layout>
          <Create />
        </Layout>
      </div>
    );
  }
}
