import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import Detail from '@/container/article/Detail';

@withRouter
export default class index extends PureComponent {
  render() {
    const { router } = this.props;
    const { _id } = router.query;
    return (
      <div>
        <Detail _id={_id} />
      </div>
    );
  }
}
