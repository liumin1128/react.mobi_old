import React, { PureComponent } from 'react';

export default function (WrappedComponent) {
  return class GetQuery extends PureComponent {
    static async getInitialProps({ query }) {
      return { query };
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
