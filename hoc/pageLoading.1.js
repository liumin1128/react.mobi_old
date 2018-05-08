import React, { PureComponent } from 'react';
import Router from 'next/router';
import Loading from '../components/loading/page';
// import  from '..'
// import { isServerSide } from '../utils/common';

export function pageLoading(WrappedComponent) {
  return class PageLoadingComponent extends PureComponent {
    state = {
      show: true,
      keys: [],
    }
    componentDidMount() {
      this.change();
    }
    change = () => {
      const { pathname, pageLoader } = Router.router;
      console.log('pageLoader.pageCache');
      console.log(pageLoader.pageCache);
      this.setState({
        keys: Object.keys(pageLoader.pageCache),
      });
      Router.onRouteChangeStart = (url) => {
        console.log('this.state.keys');
        console.log(this.state.keys);
        console.log('this.state.keys.indexOf(url) === -1');
        console.log(this.state.keys.indexOf(url) === -1);
        if (this.state.keys.indexOf(url) === -1) {
          this.setState({
            show: false,
          });
        }
        // console.log('pageLoader.pageCache');
        // console.log(pageLoader.pageCache);
        // if (pathname !== url && !pageLoader.pageCache[pathname]) {
        //   this.setState({
        //     show: false,
        //   });
        // }
      };
      Router.onRouteChangeComplete = (url) => {
        if (pathname !== url) {
          this.setState({
            show: true,
          });
        }
      };
    }
    render() {
      console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
      if (!this.state.show) {
        return (<Loading />);
      }
      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}
