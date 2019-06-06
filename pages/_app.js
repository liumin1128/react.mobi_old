import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '@/config/theme';
import Header from '@/components/Layout/Header';
import { withTheme } from '@/hoc/theme';

class MyApp extends App {
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
    const { Component, pageProps } = this.props;

    console.log('this.props');
    console.log(this.props);

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

export default withTheme(MyApp);
