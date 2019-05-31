/* eslint-disable func-names */
const availablePrefixs = ['moz', 'ms', 'webkit'];

function requestAnimationFramePolyfill() {
  // 这个函数用来生成一个定时器的或者监听器ID，如果当前定时器不是window
  // 上面的requestAnimationFrame那就自己生成一个，用于以后清除定时器使用
  let lastTime = 0;
  return function (callback) {
    const currTime = new Date().getTime();
    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
    const id = window.setTimeout(() => { callback(currTime + timeToCall); }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
}

export function getRequestAnimationFrame() {
  // 这个函数返回一个定时器或者监听器ID
  if (typeof window === 'undefined') {
    return () => {};
  }
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame.bind(window);
  }

  // 做了浏览器兼容
  const prefix = availablePrefixs.filter(key => `${key}RequestAnimationFrame` in window)[0];

  return prefix
    ? window[`${prefix}RequestAnimationFrame`]
    : requestAnimationFramePolyfill();
}

export function cancelRequestAnimationFrame(id) {
  // 这个函数用来根据ID删除对应的定时器或者监听器
  if (typeof window === 'undefined') {
    return null;
  }
  if (window.cancelAnimationFrame) {
    return window.cancelAnimationFrame(id);
  }
  const prefix = availablePrefixs.filter(key => `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window)[0];

  return prefix
    ? (window[`${prefix}CancelAnimationFrame`] || window[`${prefix}CancelRequestAnimationFrame`]).call(this, id)
    : clearTimeout(id);
}


export function throttleByAnimationFrame(fn) {
  let requestId;

  const raf = getRequestAnimationFrame();

  const later = args => () => {
    requestId = null;
    fn(...args);
  };

  const throttled = (...args) => {
    if (requestId == null) {
      requestId = raf(later(args));
    }
  };

  // throttled.cancel = () => raf.cancel(requestId);
  throttled.cancel = () => cancelRequestAnimationFrame(requestId);

  return throttled;
}

export default function throttleByAnimationFrameDecorator() {
  return function (target, key, descriptor) {
    const fn = descriptor.value;
    let definingProperty = false;
    return {
      configurable: true,
      get() {
        if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
          return fn;
        }

        const boundFn = throttleByAnimationFrame(fn.bind(this));
        definingProperty = true;
        Object.defineProperty(this, key, {
          value: boundFn,
          configurable: true,
          writable: true,
        });
        definingProperty = false;
        return boundFn;
      },
    };
  };
}
/* eslint-enable func-names */
