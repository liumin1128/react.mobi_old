import React from 'react';
import { ApolloProvider } from 'react-apollo';
import App, { Container } from 'next/app';
import withApollo from '@/hoc/lib/apolloRoot';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withRoot from '@/hoc/material-ui/withRoot';

@withApollo
@withRoot
export default class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient, pageContext } = this.props;
    return (<Container>
      <ApolloProvider client={apolloClient}>
        <MuiThemeProvider theme={pageContext.theme} sheetsManager={pageContext.sheetsManager}>
          <CssBaseline />
          <Component {...pageProps} />
        </MuiThemeProvider>
      </ApolloProvider>
    </Container>);
  }
}
