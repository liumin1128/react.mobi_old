import React, { Fragment } from 'react';
import Header from '@/components/Layout/Header';

export default WrappedComponent => ({ Component, ...props }) => {
  /* eslint-disable no-param-reassign */
  if (!Component.Layout) Component.Layout = Fragment;
  if (!Component.Header) Component.Header = Header;
  if (!Component.Footer) Component.Footer = Fragment;

  return <WrappedComponent Component={Component} {...props} />;
};
