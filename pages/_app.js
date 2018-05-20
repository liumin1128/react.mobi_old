import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withRoot from '@/hoc';
import Modal from '@/hoc/widthModal';

@withRoot
export default class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient, pageContext, reduxStore } = this.props;
    return (<Container>
      <Provider store={reduxStore}>
        <ApolloProvider client={apolloClient}>
          <MuiThemeProvider theme={pageContext.theme} sheetsManager={pageContext.sheetsManager}>
            <CssBaseline />
            <Modal>
              <Component {...pageProps} />
            </Modal>
          </MuiThemeProvider>
        </ApolloProvider>
      </Provider>
    </Container>);
  }
}
