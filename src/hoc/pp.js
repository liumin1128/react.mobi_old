import React, { PureComponent } from 'react';

export default (WrappedComponent, props) => class extends PureComponent {
  render() {
    return <WrappedComponent {...this.props} {...props} />;
  }
};
