import React from 'react'
import App from 'next/app'
import { ThemeContextProvider, ThemeProvider } from '@/hoc/theme'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeContextProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContextProvider>
    )
  }
}
