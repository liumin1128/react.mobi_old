import React, { PureComponent } from 'react';
import Link from '@/components/Link';
import Article from '@/view/article/list';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Link to={'/article/create'}>create</Link>
        <Article />
      </div>
    );
  }
}
