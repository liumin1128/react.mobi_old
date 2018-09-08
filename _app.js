import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';

export default class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props;
    return (<Container>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Container>);
  }
}
