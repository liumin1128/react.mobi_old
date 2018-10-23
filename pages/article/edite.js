import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import Edite from '@/view/article/edite';

@withRouter
export default class index extends PureComponent {
  render() {
    const { router } = this.props;
    const { _id } = router.query;
    return (
      <Edite mode="update" _id={_id} />
    );
  }
}
