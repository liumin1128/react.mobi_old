import React, { Fragment } from 'react';
import App, { Container as NextContainer } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Header from '@/components/Layout/Header';
import withMaterial from '@/hoc/material';
// import defaultLayout from '@/hoc/layout';
import withGraphql from '@/hoc/graphql/apolloRoot';

@withGraphql
@withMaterial
// @defaultLayout
export default class MyApp extends App {
  render() {
    const { Component, apolloClient } = this.props;

    /* eslint-disable no-param-reassign */
    if (!Component.Layout) Component.Layout = Fragment;
    if (!Component.Header) Component.Header = Header;
    if (!Component.Footer) Component.Footer = Fragment;

    return (
      <NextContainer>
        <ApolloProvider client={apolloClient}>
          <ApolloHooksProvider client={apolloClient}>
            <Component.Layout>
              <Component.Header />
              <Container maxWidth="md">
                <Box my={2}>
                  {Component.Sider ? (
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={8}>
                        <Component />
                      </Grid>
                      <Grid item xs={12} sm={12} md={4}>
                        <Hidden implementation="css" only={[ 'sm', 'xs' ]}>
                          <Component.Sider />
                        </Hidden>
                      </Grid>
                    </Grid>
                  ) : <Component />}
                </Box>
              </Container>
              <Component.Footer />
            </Component.Layout>
          </ApolloHooksProvider>
        </ApolloProvider>
      </NextContainer>
    );
  }
}
