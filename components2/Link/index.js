import React, { PureComponent } from 'react';
import Link from 'next/link';

export default class MyLink extends PureComponent {
  render() {
    const { to, href, children, target, ...other } = this.props;
    return (
      <Link href={to || href} {...other}>
        <a target={target} style={{ textDecoration: 'none', color: 'inherit' }}>{children}</a>
      </Link>
    );
  }
}
