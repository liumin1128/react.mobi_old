import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { QINIUURL, QINIU_UPLOADURL } from '@/constants/base';

export default function (WrappedComponent) {
  return @connect(({ common }) => ({
    token: common.qiniuToken,
  }))
  class extends PureComponent {
    componentWillMount() {
      const { dispatch } = this.props;
      dispatch({
        type: 'common/getQiniuToken',
      });
    }
    render() {
      return (
        <WrappedComponent
          action={QINIU_UPLOADURL}
          qiniuUrl={QINIUURL}
          {...this.props}
        />
      );
    }
  };
}

