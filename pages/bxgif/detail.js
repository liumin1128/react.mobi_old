import React, { PureComponent, Fragment } from 'react';
import Detail from '@/container/bxgif/detail';
import { withRouter } from 'next/router';

@withRouter
export default class DxgifDetail extends PureComponent {
  render() {
    const { router } = this.props;
    const { id } = router.query;
    return (
      <Fragment>
        <h1>{id}</h1>
        <Detail id={id} />
      </Fragment>
    );
  }
}
