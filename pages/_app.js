import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import hoc from '@/hoc';
import { isServerSide } from '@/utils/common';
import Layout from '@/components/Layout';

@hoc
export default class MyApp extends App {
  render() {
    const { Component, pageProps, pageContext, apolloClient, router } = this.props;

    if (router.pathname.indexOf('/login') !== -1) {
      return (
        <Container>
          <ApolloProvider client={apolloClient}>
            {
              isServerSide()
                ? <Component pageContext={pageContext} {...pageProps} />
                : <Component {...pageProps} />
            }
          </ApolloProvider>
        </Container>
      );
    }

    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <Layout>
            {
              isServerSide()
                ? <Component pageContext={pageContext} {...pageProps} />
                : <Component {...pageProps} />
            }
          </Layout>
        </ApolloProvider>
      </Container>
    );
  }
}
