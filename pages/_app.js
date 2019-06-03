import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TabNavigation from '@/components/Navigation/Tab';
import theme from '../src/theme';

const navList = [
  { pathname: '/', label: '首页' },
  { pathname: '/about', label: '关于' },
];

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

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <TabNavigation navList={navList} />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
