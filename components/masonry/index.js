import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';

// @connect(({ common }) => ({ common }))
export default class MyMasonry extends Component {
  render() {
    const { children, ...other } = this.props;
    if (typeof window === 'undefined') return null;
    return (<Masonry {...other} >{children}</Masonry>);
  }
}
