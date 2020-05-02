import { format } from 'timeago.js'

export const getTimeAgo = date => format(date, 'zh_CN')

export function isWeixin() {
  const ua = navigator.userAgent.toLowerCase()
  if (ua.indexOf('micromessenger') !== -1) {
    return true
  }
  return false
}

export function isServerSide() {
  return typeof window === 'undefined' || typeof document === 'undefined'
}

export function isTel(Tel) {
  const re = new RegExp(
    /^((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)$/
  )
  const retu = Tel.match(re)
  if (retu) {
    return true
  }
  return false
}

/* eslint-disable prefer-destructuring */
export function getScrollTop() {
  let scrollTop = 0
  if (document.documentElement && document.documentElement.scrollTop) {
    scrollTop = document.documentElement.scrollTop
  } else if (document.body) {
    scrollTop = document.body.scrollTop
  }
  return scrollTop
}
/* eslint-enable prefer-destructuring */

export function isElementInViewport(el, offset = 0) {
  const box = el.getBoundingClientRect()
  const top = box.top >= 0
  const left = box.left >= 0
  const bottom =
    box.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset
  const right = box.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
  return top && left && bottom && right
}

export function getLessStr(str, end = 15, start = 0) {
  if (str && str.length > end) {
    return `${str.substring(start, end)}...`
  }
  return str
}

export function getStrFromHtml(html, max = 140) {
  return `${html.replace(/<[^>]+>/g, '').substring(0, max)}......`
}

export const getSmallImg = (url, propsX, propsY) => {
  const x = propsX || 200
  const y = propsY || 200
  return `${url}?imageMogr2/thumbnail/!${x}x${y}r/gravity/Center/crop/${x}x${y}`
}

export function formatTime(tm, conf = 'YYYY年MM月DD日 HH:mm:ss 星期') {
  const t = new Date(tm)
  return conf
    .replace(/YYYY/g, t.getFullYear())
    .replace(/MMM/g, `0${t.getMonth()}`.slice(-2))
    .replace(/MM/g, t.getMonth() + 1)
    .replace(/DD/g, t.getDate())
    .replace(/HH/g, t.getHours())
    .replace(/mm/g, `0${t.getMinutes()}`.slice(-2))
    .replace(/ss/g, t.getSeconds())
    .replace(/星期/g, `星期${['日', '一', '二', '三', '四', '五', '六'][t.getDay()]}`)
}

export const randomString = (len = 32) => {
  const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  /** **默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1*** */
  const maxPos = $chars.length
  let pwd = ''
  for (let i = 0; i < len; i += 1) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return pwd
}

export function checkPasswordStrength(password) {
  if (password.length < 8) {
    return 0
  }
  let strength = 0
  if (password.match(/([0-9])+/)) {
    strength += 1
  }
  if (password.match(/([a-z])+/)) {
    strength += 1
  }
  if (password.match(/([A-Z])+/)) {
    strength += 1
  }
  if (password.match(/[^a-zA-Z0-9]+/)) {
    strength += 1
  }
  // const reg = new RegExp(
  //   "[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]",
  // );
  // if (password.match(reg)) {
  //   strength += 1;
  // }
  return strength
}

export function checkEmail(str) {
  const re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
  return re.test(str)
}

/**
 * 动画垂直滚动到页面指定位置
 * @param { Number } currentY 当前位置
 * @param { Number } targetY 目标位置
 */
export function scrollAnimation(currentY, targetY) {
  // 获取当前位置方法
  // const currentY = document.documentElement.scrollTop || document.body.scrollTop

  // 计算需要移动的距离
  const needScrollTop = targetY - currentY
  let _currentY = currentY
  setTimeout(() => {
    // 一次调用滑动帧数，每次调用会不一样
    const dist = Math.ceil(needScrollTop / 10)
    _currentY += dist
    window.scrollTo(_currentY, currentY)
    // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
    if (needScrollTop > 10 || needScrollTop < -10) {
      scrollAnimation(_currentY, targetY)
    } else {
      window.scrollTo(_currentY, targetY)
    }
  }, 1)
}

export function scrollToTop() {
  const currentY = document.documentElement.scrollTop || document.body.scrollTop
  scrollAnimation(currentY, 0)
}

export function scrollToTopEaseing(duration = 750) {
  // More easeing-function: https://github.com/cferdinandi/smooth-scroll
  const easeingFunction = t => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)
  const originScrollY = window.pageYOffset
  const originScrollX = window.pageXOffset // Keep abscissa
  const originTime = Date.now()
  let passedTime = 0
  const _scrollToTop = () => {
    if (passedTime < duration) {
      passedTime = Date.now() - originTime
      requestAnimationFrame(_scrollToTop)
      window.scrollTo(originScrollX, originScrollY * (1 - easeingFunction(passedTime / duration)))
    }
  }
  _scrollToTop()
}
