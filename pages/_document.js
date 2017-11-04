import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const {
      html, head, errorHtml, chunks,
    } = renderPage();
    const styles = flush();
    return {
      html, head, errorHtml, chunks, styles,
    };
  }
  render() {
    return (
      <html lang={'zh-cmn-Hans'}>
        <Head>
          <meta charSet="UTF-8" />
          <title>本王今年八岁</title>
          <meta name="description" content={'description'} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
          <link rel="apple-touch-icon" href="/static/touch-icon.png" />
          <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
          <link rel="icon" href="/static/favicon.ico" />
          <style>{'body { margin: 0 } /* custom! */'}</style>
        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
