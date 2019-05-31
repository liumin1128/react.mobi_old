import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import MzituDetail from '@/container/Mzitu/Detail';
import BlankLayout from '@/components/Layout/Blank';

@withRouter
export default class News extends PureComponent {
  render() {
    const { router } = this.props;
    const { id } = router.query;
    return (
      <BlankLayout>
        <MzituDetail id={id} />
      </BlankLayout>
    );
  }
}
