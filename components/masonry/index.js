import React, { PureComponent } from 'react';
import Masonry from 'react-masonry-component';

export default class MyMasonry extends PureComponent {
  state = {
    inited: false,
  }
  render() {
    const { children, ...other } = this.props;
    const { inited } = this.state;
    return (<Masonry
      onImagesLoaded={() => {
        if (!inited) {
          this.setState({ inited: true });
        }
      }}
      {...other}
    >
      {inited && children}
    </Masonry>);
  }
}
