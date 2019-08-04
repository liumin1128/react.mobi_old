import { format } from 'timeago.js';

export const getTimeAgo = date => format(date, 'zh_CN');

export function isWeixin() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('micromessenger') !== -1) {
    return true;
  } else {
    return false;
  }
}

export function isServerSide() {
  return typeof window === 'undefined' || typeof document === 'undefined';
}

export function isTel(Tel) {
  const re = new RegExp(/^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/);
  const retu = Tel.match(re);
  if (retu) {
    return true;
  } else {
    return false;
  }
}

/* eslint-disable prefer-destructuring */
export function getScrollTop() {
  let scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
}
/* eslint-enable prefer-destructuring */

export function isElementInViewport(el, offset = 0) {
  const box = el.getBoundingClientRect();
  const top = (box.top >= 0);
  const left = (box.left >= 0);
  const bottom = (box.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset);
  const right = (box.right <= (window.innerWidth || document.documentElement.clientWidth) + offset);
  return (top && left && bottom && right);
}

export function getLessStr(str, end = 15, start = 0) {
  if (str && str.length > end) {
    return `${str.substring(start, end)}...`;
  } else {
    return str;
  }
}

export function getStrFromHtml(html, max = 140) {
  return `${html
    .replace(/<[^>]+>/g, '')
    .substring(0, max)}......`;
}

export const getSmallImg = (url, propsX, propsY) => {
  const x = propsX || 200;
  const y = propsY || 200;
  return `${url}?imageMogr2/thumbnail/!${x}x${y}r/gravity/Center/crop/${x}x${y}`;
};

export function formatTime(tm, conf = 'YYYY年MM月DD日 HH:mm:ss 星期') {
  const t = new Date(tm);
  return conf
    .replace(/YYYY/g, t.getFullYear())
    .replace(/MMM/g, (`0${t.getMonth()}`).slice(-2))
    .replace(/MM/g, t.getMonth() + 1)
    .replace(/DD/g, t.getDate())
    .replace(/HH/g, t.getHours())
    .replace(/mm/g, (`0${t.getMinutes()}`).slice(-2))
    .replace(/ss/g, t.getSeconds())
    .replace(/星期/g, `星期${[ '日', '一', '二', '三', '四', '五', '六' ][t.getDay()]}`);
}

export const randomString = (len = 32) => {
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1*** */
  const maxPos = $chars.length;
  let pwd = '';
  for (let i = 0; i < len; i += 1) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
};
