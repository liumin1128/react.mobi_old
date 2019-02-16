import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import BlankLayout from '@/components/Layout/Blank';
import Edite from '@/container/article/edite';

@withRouter
export default class index extends PureComponent {
  render() {
    return (
      <BlankLayout>
        <Edite />
      </BlankLayout>
    );
  }
}
