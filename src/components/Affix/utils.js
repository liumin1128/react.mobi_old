import fetchKeys from 'lodash/keys';

export function getScroll(target, top) {
  if (typeof window === 'undefined') {
    return 0;
  }
  // 为了兼容火狐浏览器，所以添加了这一句
  const prop = top ? 'pageYOffset' : 'pageXOffset';
  const method = top ? 'scrollTop' : 'scrollLeft';
  const isWindow = target === window;

  let ret = isWindow ? target[prop] : target[method];
  // ie6,7,8 standard mode
  if (isWindow && typeof ret !== 'number') {
    ret = window.document.documentElement[method];
  }

  return ret;
}

export function getTargetRect(target) {
  return target !== window
    ? target.getBoundingClientRect() : {
      top: 0,
      left: 0,
      bottom: 0,
    };
}

export function getDefaultTarget() {
  return typeof window !== 'undefined'
    ? window : null;
}

export function noop() {}


export function getOffset(element, target) {
  // 这里的getBoundingClientRect()是一个很有用的函数，获取页面元素位置
  /**
   * document.body.getBoundingClientRect()
   * DOMRect {x: 0, y: -675, width: 1280, height: 8704, top: -675, …}
   *
   */
  const elemRect = element.getBoundingClientRect();
  const targetRect = getTargetRect(target);

  const scrollTop = getScroll(target, true);
  const scrollLeft = getScroll(target, false);

  const docElem = window.document.body;
  const clientTop = docElem.clientTop || 0;
  const clientLeft = docElem.clientLeft || 0;

  return {
    top: elemRect.top - targetRect.top
      + scrollTop - clientTop,
    left: elemRect.left - targetRect.left
      + scrollLeft - clientLeft,
    width: elemRect.width,
    height: elemRect.height,
  };
}

// '../_util/getRequestAnimationFrame'
// 由于下面的装饰器还使用了这个文件里面的函数，所以一并给搬过来了
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
    // https://github.com/vuejs/vue/issues/4465
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

// 获得一个定时器或者监听器
const reqAnimFrame = getRequestAnimationFrame();
// 这个函数收到一个函数 返回一个被放入监听其或者定时器额函数，
// 也就是说给这个传入的函数绑定了一个id，让他成为唯一的一个，
// 这样在消除他的时候也很方便
export function throttleByAnimationFrame(fn) {
  let requestId;

  const later = args => () => {
    requestId = null;
    fn(...args);
  };

  const throttled = (...args) => {
    if (requestId == null) {
      // 获取定时器或者监听器ID，将监听事件传入
      requestId = reqAnimFrame(later(args));
    }
  };
  // 给这个函数添加上一个取消的函数
  throttled.cancel = () => cancelRequestAnimationFrame(requestId);
  // 返回构造的新函数
  return throttled;
}

export function throttleByAnimationFrameDecorator() {
  return function (target, key, descriptor) {
    // 装饰器函数，传入typescript的方法构造器的三个参数
    // target: 当前函数（属性）属于的类
    // key: 当前函数（属性）名
    // dedescriptor： 当前属性的描述
    const fn = descriptor.value;
    let definingProperty = false;
    return {
      configurable: true,
      // 这里有一个疑惑 就是这个get（）函数是在什么时候被执行的呢？
      // 因为从外部看来 这个函数最多只执行到了上一层的return，这一层的
      // 没有被执行，那么一下代码都不会走，但是却能够调用新函数里面的属性。。。 好神奇，
      // 希望有大神能够在此解说一下 万分感激
      get() {
        if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
          return fn;
        }

        const boundFn = throttleByAnimationFrame(fn.bind(this));
        definingProperty = true;
        // 重新将传入的函数定义成构造的新函数并且返回
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

export function shallowequal(objA, objB, compare, compareContext) {
  const ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  const keysA = fetchKeys(objA);
  const keysB = fetchKeys(objB);

  const len = keysA.length;
  if (len !== keysB.length) {
    return false;
  }

  compareContext = compareContext || null;

  // Test for A's keys different from B.
  const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
  for (let i = 0; i < len; i++) {
    const key = keysA[i];
    if (!bHasOwnProperty(key)) {
      return false;
    }
    const valueA = objA[key];
    const valueB = objB[key];

    const _ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
    if (_ret === false || _ret === void 0 && valueA !== valueB) {
      return false;
    }
  }

  return true;
}
