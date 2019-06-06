import React from 'react';
import App, { Container } from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import NavTabs from '@/components/NavTabs';
import theme from '@/config/theme';

import Header from '@/components/Layout/Header';


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
          <Header />
          <NavTabs navList={navList} />
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
