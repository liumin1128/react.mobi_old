import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import hoc from '@/hoc';

@hoc
export default class MyApp extends App {
  render() {
    const { Component, pageProps, pageContext, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Component pageContext={pageContext} {...pageProps} />
        </ApolloProvider>
      </Container>
    );
  }
}
