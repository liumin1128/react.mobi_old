import React, { PureComponent } from 'react';
import Detail from '@/container/bxgif/detail';
import Layout from '@/components/Layout/Blank';
import { withRouter } from 'next/router';

@withRouter
export default class DxgifDetail extends PureComponent {
  render() {
    const { router } = this.props;
    const { id } = router.query;
    return (
      <Layout>
        <Detail id={id} />
      </Layout>
    );
  }
}
