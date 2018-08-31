import React, { PureComponent, Fragment, createRef } from 'react';
import { Player } from 'video-react';
import Head from 'next/head';
import Hls from 'hls.js';
import nossr from '@/hoc/nossr';

@nossr
export default class extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.hls = new Hls();
    this.state = {
      src: 'http://qncdn.huarenhouse.com/APP%E4%BB%8B%E7%BB%8DV4%E5%BC%80%E5%A4%B4%E5%A4%9A%E4%B8%80%E5%B8%A7.mov?avvod/m3u8/s/960x640/vb/1000k',
    };
  }
  componentDidMount() {
    // console.log(this.video);
    const { video } = this.video.video;
    const { src } = this.state;
    if (Hls.isSupported()) {
      this.hls.loadSource(src);
      this.hls.attachMedia(video);
      this.hls.on(Hls.Events.MANIFEST_PARSED, () => {
        console.log('video');
        console.log(video);
        video.play();
      });
    }
  }
  video = createRef()
  render() {
    const { src } = this.state;

    return (<Fragment>
      <Head>
        <link href="/static/video-react.css" rel="stylesheet" />
      </Head>
      <div style={{ padding: 16, maxWidth: 500 }}>
        <Player
          playsInline
          poster="/assets/poster.png"
          ref={(c) => { this.video = c; }}
        >
          <source
            src={src}
            type="application/x-mpegURL"
          />
        </Player>
      </div>
    </Fragment>);
  }
}
