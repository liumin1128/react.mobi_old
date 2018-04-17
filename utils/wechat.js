import wx from 'weixin-js-sdk';
import request from './request';

let init = false;

const jsApiList = [
  'onMenuShareTimeline',
  'onMenuShareAppMessage',
  'onMenuShareQQ',
  'onMenuShareWeibo',
  'onMenuShareQZone',
  'startRecord',
  'stopRecord',
  'onVoiceRecordEnd',
  'playVoice',
  'pauseVoice',
  'stopVoice',
  'onVoicePlayEnd',
  'uploadVoice',
  'downloadVoice',
  'chooseImage',
  'previewImage',
  'uploadImage',
  'downloadImage',
  'translateVoice',
  'getNetworkType',
  'openLocation',
  'getLocation',
  'hideOptionMenu',
  'showOptionMenu',
  'hideMenuItems',
  'showMenuItems',
  'hideAllNonBaseMenuItem',
  'showAllNonBaseMenuItem',
  'closeWindow',
  'scanQRCode',
];


export const configWxJsSdk = (config) => {
  return new Promise((resolve, reject) => {
    // console.log(config);
    wx.config(config);
    wx.ready(() => {
      console.log('微信JsSdk初始化成功');
      resolve();
    });
    wx.error((err) => {
      console.log('微信JsSdk初始化失败');
      reject(err);
    });
  });
};

export const getWxSignature = async () => {
  const url = window.location.href.split('#')[0];
  const params = { url, jsApiList, debug: false };
  const { code, body } = await request('/wxservice/jsSignature', params);
  if (code === 200) {
    return body;
  }
};

export function updataWechatShare(options = {}) {
  // alert(JSON.stringify(options));

  if (!init) {
    initWxJsSdk(options);
    return;
  }
  // console.log('更新微信分享....');
  // console.log(options);
  const {
    title = '华人生活网是海外华人最大的中文分类信息和生活资讯门户网站',
    link = 'https://www.react.mobi/?&',
    // link = `${window.location.href.split('#')[0]}?&`,
    imgUrl = 'https://www.react.mobi/static/logo.png',
    desc = '华人生活网是海外华人最大的中文分类信息和生活资讯门户网站',
    type,
    dataUrl,
  } = options;

  // 分享到朋友圈
  wx.onMenuShareTimeline({
    title, link, imgUrl,
  });

  // 分享给朋友
  wx.onMenuShareAppMessage({
    title, desc, link, imgUrl, type, dataUrl,
  });

  // 分享到QQ
  wx.onMenuShareAppMessage({
    title, desc, link, imgUrl,
  });
}

export const initWxJsSdk = async (options) => {
  try {
    console.log('initWxJsSdk');
    const config = await getWxSignature();
    await configWxJsSdk(config);
    init = true;
    await updataWechatShare(options);
  } catch (error) {
    console.log('initWxJsSdk error');
    console.log(error);
  }
};

