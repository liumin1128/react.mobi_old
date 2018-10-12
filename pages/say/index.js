import React, { PureComponent } from 'react';
import Link from '@/components/Link';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Link to={'/say/create'}>create</Link>
      </div>
    );
  }
}
