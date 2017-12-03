import React, { PureComponent } from 'react';
import { connect } from '../../utils';


export default function (WrappedComponent) {
  return @connect(({ common }) => ({
    qiniuToken: common.qiniuToken,
  }))
  class extends PureComponent {
    componentWillMount() {
      const { dispatch } = this.props;
      dispatch({
        type: 'common/getQiniuToken',
      });
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

