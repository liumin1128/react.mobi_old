import React, { PureComponent } from 'react';
import Layout from '@/components/Layout';
import Link from '@/components/Link';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Layout>
          <Link to={'/say/create'}>create</Link>
        </Layout>
      </div>
    );
  }
}
