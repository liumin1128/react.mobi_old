import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import flush from 'styled-jsx/server';
import theme from '@/config/theme';

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <title>盗火</title>
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            id="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap"
          />
          <link rel="icon" href="https://imgs.react.mobi/FjpmLe9it1pTemLeB2w5XgDhv1D-" type="image/x-icon" />
          <link rel="shortcut icon" href="https://imgs.react.mobi/FjpmLe9it1pTemLeB2w5XgDhv1D-" type="image/x-icon" />

          <link href="https://imgs.react.mobi/FlJJA3uXR8FaVGJ5Gxluorer_0H9" rel="apple-touch-icon-precomposed" />
          <link href="https://imgs.react.mobi/FlJJA3uXR8FaVGJ5Gxluorer_0H9" sizes="114x114" rel="apple-touch-icon-precomposed" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
          <script type="text/javascript" src="/static/start.js" defer="defer" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () => originalRenderPage({
    enhanceApp: App => props => sheets.collect(<App {...props} />),
  });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        {sheets.getStyleElement()}
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;
