import React, { PureComponent } from 'react';
import Router from 'next/router';
import { getScrollTop } from '../../utils/common';
import { getStorage, setStorage, removeStorage } from '../../utils';

export default function (WrappedComponent) {
  return class extends PureComponent {
    async componentDidMount() {
      const { router } = Router;
      const key = `scrollTop.react.mobi${router.pathname}`;
      const scrollTop = await getStorage(key);
      if (scrollTop) {
        window.scrollTo(0, scrollTop);
        await removeStorage(key);
      }
      if (!Router.onRouteChangeStart) {
        Router.onRouteChangeStart = () => {
          setStorage(key, getScrollTop());
        };
      }
    }
    componentWillUnmount() {
      Router.onRouteChangeStart = null;
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

