export function isWeixin() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true;
  } else {
    return false;
  }
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

export function getScrollTop() {
  let scrollTop = 0;
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop;
  } else if (document.body) {
    scrollTop = document.body.scrollTop;
  }
  return scrollTop;
}

export function lessStr(str, end = 15, start = 0) {
  if (str && str.length > end) {
    return `${str.substring(start, end)}...`;
  } else {
    return str;
  }
}

export function formatTime(tm, conf = 'YYYY年MM月DD日 HH:mm:ss 星期') {
  const t = new Date(tm);
  return conf
    .replace(/YYYY/g, t.getFullYear())
    .replace(/MM/g, t.getMonth() + 1)
    .replace(/DD/g, t.getDate())
    .replace(/HH/g, t.getHours())
    .replace(/mm/g, (`0${t.getMinutes()}`).slice(-2))
    .replace(/ss/g, t.getSeconds())
    .replace(/星期/g, `星期${['日', '一', '二', '三', '四', '五', '六'][t.getDay()]}`);
}
