import React from 'react';
import Head from 'next/head';

export default ({ children }) => (<Head>
  <meta charSet="UTF-8" />
  <title>本王今年八岁</title>
  <meta name="description" content={'description'} />
  <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;" name="viewport" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <link rel="apple-touch-icon-precomposed" href="icon.png" />
  <link rel="apple-touch-startup-image" sizes="2048x1496" href="" />
  <link rel="apple-touch-icon" href="icon.png" />
  <style>{`
    * {
      -webkit-tap-highlight-color:rgba(255,255,255,0);
      border-width: thin;
      -webkit-appearance: none;
      user-select: none;
      -webkit-user-select: none;
      -webkit-touch-callout: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      margin: 0;
      padding: 0;
    }
    input, select, textarea, option {
      backgrund: #fff;
      -webkit-user-select: auto;
      -webkit-touch-callout: auto;
      border-radius: 0;
      box-sizing: border-box;
    }
    body {
      // background-color: #fafbfc;
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
      font-family: -apple-system, BlinkMacSystemFont, PingFang-SC-Regular, 'Hiragino Sans GB', 'Microsoft Yahei', Arial, sans-serif;
      // max-width: 450px;
      margin: 0 auto;
      background: #fafbfc;
      position: relative;
    }

    a {
      color: #292525;
      text-decoration: none
    }

    @media (min-width: 768px){
      body {
        margin-top: 55px;
      }
    }
  `}</style>
  {children}
</Head>);
