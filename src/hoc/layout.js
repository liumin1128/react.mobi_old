import React, { Fragment } from 'react';

export default WrappedComponent => ({ Component, ...props }) => {
  /* eslint-disable no-param-reassign */
  if (!Component.Layout) Component.Layout = Fragment;
  if (!Component.Header) Component.Header = Fragment;
  if (!Component.Footer) Component.Footer = Fragment;

  return <WrappedComponent Component={Component} {...props} />;
};
