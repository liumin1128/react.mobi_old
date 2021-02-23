import React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import { ThemeContextProvider, ThemeProvider } from '@/hoc/theme'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ThemeContextProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContextProvider>
  </>
}

