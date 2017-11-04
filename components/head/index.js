import React from 'react';
import Head from 'next/head';

export default ({ children }) => (<Head>
  <meta charSet="UTF-8" />
  <title>本王今年八岁</title>
  <meta name="description" content={'description'} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
  <link rel="apple-touch-icon" href="/static/touch-icon.png" />
  <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
  <link rel="icon" href="/static/favicon.ico" />
  {children}
</Head>);
