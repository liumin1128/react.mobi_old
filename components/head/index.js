import React from 'react';
import Head from 'next/head';

export default ({ children }) => (<Head>
  <meta charSet="UTF-8" />
  <title>本王今年八岁</title>
  <meta name="description" content={'description'} />
  <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
  <link rel="apple-touch-icon-precomposed" href="icon.png" />
  <link rel="apple-touch-startup-image" sizes="2048x1496" href="" />
  <link rel="apple-touch-icon" href="icon.png" />

  <style>{`


  body {
    font-family: PingFang SC, RobotoDraft, Roboto, "Helvetica Neue", Helvetica, Arial, STHeiti, "华文黑体", "Microsoft YaHei", "微软雅黑", sans-serif;
    // overflow: hidden;
    background-color: #fff;
    -webkit-font-smoothing: antialiased;
  }

  button,
  select,
  html,
  textarea,
  input {
    font-family: PingFang SC, RobotoDraft, Roboto, "Helvetica Neue", Helvetica, Arial, STHeiti, "华文黑体", "Microsoft YaHei", "微软雅黑", sans-serif;
    background-color: #fff;
  }

  img {
    user-select: none;
  }

  hr {
    width: 100%;
    border: none;
    height: 1px;
  }

  :focus {
    outline: none;
  }

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
      outline:none;
    }
    body {
      font-weight: 400;
      -webkit-font-smoothing: antialiased;
      // font-family: -apple-system, BlinkMacSystemFont, PingFang-SC-Regular, 'Hiragino Sans GB', 'Microsoft Yahei', Arial, sans-serif;
      margin: 0 auto;
      font-family: PingFang SC,RobotoDraft,Roboto,Helvetica Neue,Helvetica,Arial,STHeiti,华文黑体,Microsoft YaHei,微软雅黑,sans-serif;
      background: #fafbfc;
      position: relative;
      // color: #3e464b;
    }

    body,html {
      // background: #f5f5fa;
      // color: rgba(0,0,0,0.87);
      background-color: rgb(250,250,250);
      color: rgba(0,0,0,.34);

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
    .card {
      background: #fff;
      margin-bottom: 16px;
      box-shadow: 0 10px 28px 0 rgba(137,157,197,.12);
      cursor: pointer;
      display: block;
      background-color: #fdfdfd;
    }
    .nowrap {
      white-space: nowrap;
      text-overflow:ellipsis;
      overflow:hidden;
    }
  `}</style>
  {children}
</Head>);
