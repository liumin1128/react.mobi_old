import React, { PureComponent } from 'react';
import Masonry from 'react-masonry-component';

export default class MyMasonry extends PureComponent {
  render() {
    const { children } = this.props;
    return (<Masonry>
      {children}
    </Masonry>);
  }
}
