import React, { Fragment } from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withThemeProvider, withThemeConsumer } from '@/hoc/theme';
import defaultLayout from '@/hoc/layout';
import withGraphql from '@/hoc/graphql/apolloRoot';

import { getDataFromTree, ApolloProvider } from 'react-apollo';

@withGraphql
@withThemeProvider
@withThemeConsumer
@defaultLayout
export default class MyApp extends App {
  componentDidMount() {
    this.removeJssStyles();
  }

  removeJssStyles = () => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, theme, apolloClient } = this.props;

    console.log('apolloClient');
    console.log(apolloClient);
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component.Layout>
              <Component.Header />
              <Component {...pageProps} />
              <Component.Footer />
            </Component.Layout>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}
