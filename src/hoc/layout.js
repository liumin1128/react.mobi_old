import React, { Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Header from '@/components/Layout/Header';

export default WrappedComponent => ({ Component, ...props }) => {
  /* eslint-disable no-param-reassign */
  if (!Component.Layout) Component.Layout = Fragment;
  if (!Component.Header) Component.Header = Header;
  if (!Component.Footer) Component.Footer = Fragment;

  if (!Component.Sider) {
    return (
      <Container maxWidth="md">
        <WrappedComponent Component={Component} {...props} />
      </Container>
    );
  }

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
          <WrappedComponent Component={Component} {...props} />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Hidden implementation="css" only={[ 'sm', 'xs' ]}>
            <Component.Sider />
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  );
};
