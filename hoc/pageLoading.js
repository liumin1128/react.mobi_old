import React, { PureComponent } from 'react';
import Router from 'next/router';
// import  from '..'
// import { isServerSide } from '../utils/common';

export function pageLoading(WrappedComponent) {
  return class PageLoadingComponent extends PureComponent {
    state = {
      show: true,
    }
    componentDidMount() {
      this.change();
    }
    change = () => {
      const { pathname } = Router.router;
      Router.onRouteChangeStart = (url) => {
        if (pathname !== url) {
          this.setState({
            show: false,
          });
        }
      };
      // Router.onRouteChangeComplete = (url) => {
      //   if (pathname !== url) {
      //     this.setState({
      //       show: true,
      //     });
      //   }
      // };
    }
    render() {
      const { loading = 'loading', ...other } = this.props;
      if (!this.state.show) {
        return (<div>
          {this.state.show ? '1111' : '2222'}
        </div>);
      }
      return (
        <WrappedComponent {...other} />
      );
    }
  };
}
