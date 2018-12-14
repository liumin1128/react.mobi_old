import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';

@withRouter
export default class index extends PureComponent {
  render() {
    const { router } = this.props;
    const { _id } = router.query;
    return (
      <div>
        {_id}
      </div>
    );
  }
}
