import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import hoc from '@/hoc';
import { isServerSide } from '@/utils/common';

@hoc
export default class MyApp extends App {
  render() {
    const { Component, pageProps, pageContext, apolloClient } = this.props;
    return (
      <Container>
        <ApolloProvider client={apolloClient}>
          <JssProvider registry={pageContext.sheetsRegistry} generateClassName={pageContext.generateClassName}>
            <MuiThemeProvider theme={pageContext.theme} sheetsManager={pageContext.sheetsManager}>
              <CssBaseline />
              {isServerSide()
                ? <Component pageContext={pageContext} {...pageProps} />
                : <Component {...pageProps} />
              }
            </MuiThemeProvider>
          </JssProvider>
        </ApolloProvider>
      </Container>
    );
  }
}
