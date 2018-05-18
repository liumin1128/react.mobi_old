import React, { PureComponent } from 'react';
import Router from 'next/router';
import Loading from '@/components/loading/page';

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
      if (!this.state.show) {
        return (<Loading />);
      }
      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}
