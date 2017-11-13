import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Modal from '../modal';
import Login from '../login';

@connect(({ common }) => ({
  loginModalVisible: common.loginModalVisible,
}), (dispatch, ownProps) => ({
  close() {
    dispatch({
      type: 'common/save',
      payload: {
        loginModalVisible: false,
      },
    });
  },
  login(values) {
    dispatch({
      type: 'user/login',
      payload: values,
    });
  },
}))
export default class extends PureComponent {
  render() {
    const { loginModalVisible, close } = this.props;
    return (<Modal visible={loginModalVisible} onClose={close}>
      <Login />
    </Modal>);
  }
}
