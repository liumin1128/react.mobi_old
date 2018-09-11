

import React, { PureComponent } from 'react';
import Layout from '@/components/layout';
// import Detail from '@/view/bxgif/detail';
import { withRouter } from 'next/router';


@withRouter
export default class DxgifDetail extends PureComponent {
  render() {
    const { router } = this.props;
    const { id } = router.query;
    console.log(id);
    return (
      <Layout>
        <h1>{id}</h1>
      </Layout>
    );
  }
}
