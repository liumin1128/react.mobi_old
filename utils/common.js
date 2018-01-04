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
