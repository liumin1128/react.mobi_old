import React, { PureComponent, createRef } from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import { getScroll, getDefaultTarget, getOffset, getTargetRect, shallowequal, noop } from './utils';
import throttleByAnimationFrameDecorator from '../utils/throttleByAnimationFrame';

/* eslint-disable react/destructuring-assignment */
export default class Affix extends PureComponent {
  static propTypes = {
    offsetTop: PropTypes.number,
    offsetBottom: PropTypes.number,
    target: PropTypes.func,
  };

  static defaultProps = {
    offsetTop: 0,
    offsetBottom: 0,
    target: getDefaultTarget,
  };

  scrollEvent = undefined

  resizeEvent = undefined

  timeout = undefined

  events = [
    'resize',
    'scroll',
    'touchstart',
    'touchmove',
    'touchend',
    'pageshow',
    'load',
  ];

  eventHandlers = {};

  fixedNode = createRef();

  placeholderNode = createRef();

  state = {
    affixStyle: undefined,
    placeholderStyle: undefined,
  }

  componentDidMount() {
    const target = this.props.target || getDefaultTarget;
    // Wait for parent component ref has its value
    this.timeout = setTimeout(() => {
      this.setTargetEventListeners(target);
    });
    // this.updatePosition();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.target !== nextProps.target) {
      this.clearEventListeners();
      this.setTargetEventListeners(nextProps.target);

      // Mock Event object.
      this.updatePosition({});
    }
    if (
      this.props.offsetTop !== nextProps.offsetTop
      || this.props.offsetBottom !== nextProps.offsetBottom
    ) {
      this.updatePosition({});
    }
  }

  componentWillUnmount() {
    this.clearEventListeners();
    clearTimeout(this.timeout);
    (this.updatePosition).cancel();
  }

  setAffixStyle(e, affixStyle) {
    const { onChange = noop, target = getDefaultTarget } = this.props;
    const originalAffixStyle = this.state.affixStyle;
    const isWindow = target() === window;
    if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
      return;
    }
    if (shallowequal(affixStyle, originalAffixStyle)) {
      return;
    }
    this.setState({ affixStyle }, () => {
      const affixed = !!this.state.affixStyle;
      if ((affixStyle && !originalAffixStyle)
          || (!affixStyle && originalAffixStyle)) {
        onChange(affixed);
      }
    });
  }

  setPlaceholderStyle(placeholderStyle) {
    const originalPlaceholderStyle = this.state.placeholderStyle;
    if (shallowequal(placeholderStyle, originalPlaceholderStyle)) {
      return;
    }
    this.setState({ placeholderStyle });
  }

  setTargetEventListeners(getTarget) {
    const target = getTarget();
    if (!target) {
      return;
    }
    this.clearEventListeners();

    this.events.forEach((eventName) => {
      // this.eventHandlers[eventName] = addEventListener(target, eventName, this.updatePosition);
      this.eventHandlers[eventName] = target.addEventListener(eventName, this.updatePosition);
    });

    setTimeout(() => {
      if (document.createEvent) {
        // 创建event的对象实例。
        const event = document.createEvent('HTMLEvents');
        // 3个参数：事件类型，是否冒泡，是否阻止浏览器的默认行为
        event.initEvent('scroll', true, false);
        // 触发自定义事件oneating
        document.dispatchEvent(event);
      }
    }, 0);
  }

  syncPlaceholderStyle(e) {
    const { affixStyle } = this.state;
    if (!affixStyle) {
      return;
    }
    this.placeholderNode.style.cssText = '';
    this.setAffixStyle(e, {
      ...affixStyle,
      width: this.placeholderNode.offsetWidth,
    });
    this.setPlaceholderStyle({
      width: this.placeholderNode.offsetWidth,
    });
  }

  @throttleByAnimationFrameDecorator()
  updatePosition(e) {
  // updatePosition = (e) => {
    // console.log('xxxxxxxx');
    if (!this.fixedNode || !this.placeholderNode) return;
    let { offsetTop, offsetBottom, offset, target = getDefaultTarget } = this.props;
    const targetNode = target();

    // Backwards support
    // Fix: if offsetTop === 0, it will get undefined,
    //   if offsetBottom is type of number, offsetMode will be { top: false, ... }
    offsetTop = typeof offsetTop === 'undefined' ? offset : offsetTop;
    const scrollTop = getScroll(targetNode, true);
    // const affixNode = ReactDOM.findDOMNode(this);
    const affixNode = this.placeholderNode;
    const elemOffset = getOffset(affixNode, targetNode);
    const elemSize = {
      width: this.fixedNode.offsetWidth,
      height: this.fixedNode.offsetHeight,
    };

    const offsetMode = {
      top: false,
      bottom: false,
    };
    // Default to `offsetTop=0`.
    if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
      offsetMode.top = true;
      offsetTop = 0;
    } else {
      offsetMode.top = typeof offsetTop === 'number';
      offsetMode.bottom = typeof offsetBottom === 'number';
    }

    const targetRect = getTargetRect(targetNode);
    const targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
    if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
      // Fixed Top
      const { width } = elemOffset;
      const top = targetRect.top + offsetTop;
      this.setAffixStyle(e, {
        position: 'fixed',
        top,
        left: targetRect.left + elemOffset.left,
        width,
        zIndex: 2,
      });
      this.setPlaceholderStyle({
        width,
        height: elemSize.height,
      });
    } else if (scrollTop < elemOffset.top + elemSize.height + offsetBottom - targetInnerHeight && offsetMode.bottom) {
      // Fixed Bottom
      const targetBottomOffet = targetNode === window ? 0 : (window.innerHeight - targetRect.bottom);
      const { width } = elemOffset;
      this.setAffixStyle(e, {
        position: 'fixed',
        bottom: targetBottomOffet + offsetBottom,
        left: targetRect.left + elemOffset.left,
        width,
      });
      this.setPlaceholderStyle({
        width,
        height: elemOffset.height,
      });
    } else {
      const { affixStyle } = this.state;
      if (e.type === 'resize' && affixStyle && affixStyle.position === 'fixed' && affixNode.offsetWidth) {
        this.setAffixStyle(e, { ...affixStyle, width: affixNode.offsetWidth });
      } else {
        this.setAffixStyle(e, null);
      }
      this.setPlaceholderStyle(null);
    }

    if (e.type === 'resize') {
      this.syncPlaceholderStyle(e);
    }
  }


  clearEventListeners() {
    this.events.forEach((eventName) => {
      const handler = this.eventHandlers[eventName];
      if (handler && handler.remove) {
        handler.remove();
      }
    });
  }

  render() {
    const { children, style } = this.props;
    const { placeholderStyle = {}, affixStyle = {} } = this.state;
    const className = 'x';
    const props = omit(this.props, 'prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange', 'children');
    const _placeholderStyle = { ...placeholderStyle, ...style };

    // console.log('_placeholderStyle');
    // console.log(_placeholderStyle);
    // console.log('affixStyle');
    // console.log(affixStyle);

    return (
      <div {...props} style={_placeholderStyle} ref={(c) => { this.placeholderNode = c; }}>
        <div className={className} ref={(c) => { this.saveFixedNode = c; }} style={affixStyle}>
          {children}
        </div>
      </div>
    );
  }
}
/* eslint-enable react/destructuring-assignment */
