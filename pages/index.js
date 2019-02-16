import React, { PureComponent } from 'react';
import BaseLayout from '@/components/Layout/Base';
import Article from '@/container/article/list';

export default class index extends PureComponent {
  render() {
    return (
      <BaseLayout>
        <Article />
      </BaseLayout>
    );
  }
}
