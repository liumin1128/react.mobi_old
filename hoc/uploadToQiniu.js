import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { QINIUURL, QINIU_UPLOADURL } from '@/constants/base';

export default (WrappedComponent) => {
  class NossrComponent extends PureComponent {
    componentWillMount() {
      const { dispatch } = this.props;
      dispatch({
        type: 'common/getQiniuToken',
      });
    }
    render() {
      const { ...other } = this.props;
      return (
        <WrappedComponent
          action={QINIU_UPLOADURL}
          qiniuUrl={QINIUURL}
          {...other}
        />
      );
    }
  }
  return connect(({ common }) => ({
    token: common.qiniuToken,
  }))(NossrComponent);
};
