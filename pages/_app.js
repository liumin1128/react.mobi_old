import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import hoc from '@/hoc';
import { isServerSide } from '@/utils/common';

@hoc
export default class MyApp extends App {
  render() {
    const { Component, pageProps, pageContext, apolloClient, router, ...other } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          {
            isServerSide()
              ? <Component pageContext={pageContext} router={router} {...pageProps} />
              : <Component router={router} {...pageProps} />
          }
        </ApolloProvider>
      </Container>
    );
  }
}
