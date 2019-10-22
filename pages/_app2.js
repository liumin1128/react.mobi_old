import React, { Fragment } from 'react';
import App, { Container as NextContainer } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import withGraphql from '@/hoc/graphql/apolloRoot';
import { ThemeContextProvider } from '@/hoc/theme';
import Header from '@/components/Layout/Header';

@withGraphql
export default class MyApp extends App {
  render() {
    const { Component, apolloClient } = this.props;

    /* eslint-disable no-param-reassign */
    if (typeof Component.Layout === 'undefined') Component.Layout = Fragment;
    if (typeof Component.Header === 'undefined') Component.Header = Header;
    if (typeof Component.Footer === 'undefined') Component.Footer = Fragment;
    if (typeof Component.maxWidth === 'undefined') Component.maxWidth = 'md';

    return (
      <ApolloProvider client={apolloClient}>
        <ApolloHooksProvider client={apolloClient}>
          <ThemeContextProvider>
            <Component.Layout>
              <Component.Header />
              <Container maxWidth={Component.maxWidth}>
                <Box my={2}>
                  {typeof Component.Sider !== 'undefined' ? (
                    <Grid container spacing={3}>
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
          </ThemeContextProvider>
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}
