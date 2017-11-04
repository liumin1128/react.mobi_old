import React from 'react';
import Login from '../components/login';
import Head from '../components/head';

export default () => (<div>
  <Head>
    <title>999</title>
    <meta name="description" content="注册" className="next-head" />
  </Head>
  <Login />
  <h1 className="h1">index</h1>
  <style jsx>{`
    .h1 {
      color: red;
      font-size: 30px;
    }
  `}</style>
</div>);
