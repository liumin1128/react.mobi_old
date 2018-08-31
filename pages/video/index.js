import React, { Fragment } from 'react';
import { Player } from 'video-react';
import Head from 'next/head';

export default () => (<Fragment>
  <Head>
    <link href="/static/video-react.css" rel="stylesheet" />
  </Head>
  <div style={{ padding: 16, maxWidth: 500 }}>
    <Player>
      <source
        src="https://imgs.huarenhouse.com/APP%E4%BB%8B%E7%BB%8DV4%E5%BC%80%E5%A4%B4%E5%A4%9A%E4%B8%80%E5%B8%A7.mov"
      />
    </Player>
  </div>
</Fragment>);
