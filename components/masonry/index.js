import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

let inited = false;

@connect(({ common }) => ({ common }))
export default class MyMasonry extends PureComponent {
  // state = {
  //   inited: false,
  // }
  render() {
    const { children, ...other } = this.props;
    // const { inited } = this.state;
    return (<Masonry
      onImagesLoaded={() => {
        if (!inited) {
          inited = true;
          // this.setState({ inited: true });
        }
      }}
      {...other}
    >
      {inited && children}
    </Masonry>);
  }
}
