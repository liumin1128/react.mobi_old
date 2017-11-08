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
    render() {
      return (<Layout>
        <BaseComponent {...this.props} />
      </Layout>);
    }
  };
};
