import React from 'react';
import App, { Container } from 'next/app';
import { withThemeProvider, withThemeConsumer } from '@/hoc/theme';
import withMaterial from '@/hoc/material';
import defaultLayout from '@/hoc/layout';
import withGraphql from '@/hoc/graphql/apolloRoot';

import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';


@withGraphql
@withThemeProvider
@withThemeConsumer
@withMaterial
@defaultLayout
export default class MyApp extends App {
  render() {
    const { Component, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ApolloHooksProvider client={apolloClient}>
            <Component.Layout>
              <Component.Header />
              <Component />
              <Component.Footer />
            </Component.Layout>
          </ApolloHooksProvider>
        </ApolloProvider>
      </Container>
    );
  }
}
