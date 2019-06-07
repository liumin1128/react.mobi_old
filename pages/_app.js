import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '@/components/Layout/Header';
import { withThemeProvider, withThemeConsumer } from '@/hoc/theme';

@withThemeProvider
@withThemeConsumer
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
    const { Component, pageProps, theme } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
