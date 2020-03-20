import React from "react";
import App from "next/app";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeContextProvider } from "@/hoc/theme";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ThemeContextProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeContextProvider>
      </>
    );
  }
}
