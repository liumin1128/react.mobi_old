import React, { PureComponent } from 'react';
import Layout from '../layout';

export default (BaseComponent) => {
  return class extends PureComponent {
    static getInitialProps(ctx) {
      if (BaseComponent.getInitialProps) {
        return BaseComponent.getInitialProps(ctx);
      }
      return {};
    }
    componentWillMount() {
      console.log('this.props.url.pathname');
      console.log(this.props.url.pathname);
      this.props.dispatch({ type: 'common/save', payload: { currentPath: this.props.url.pathname } });
    }
    render() {
      return (<Layout >
        <BaseComponent {...this.props} />
      </Layout>);
    }
  };
};
