import React, { PureComponent } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import Input from '../form/input';
import Button from '../form/button';
import Oauth from './oauth';
import Logo from './logo';

@connect(({ common }) => ({
}), (dispatch, ownProps) => ({
  login(values) {
    dispatch({
      type: 'user/login',
      payload: values,
    });
  },
}))
export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.submit = () => {
      // toast('Warning Notification !');
      const username = this.username.input.value;
      const password = this.password.input.value;
      if (username && password) {
        console.log('nickname, phone, code, country');
        console.log(username, password);
        this.props.login({ username, password });
      } else {
        toast('不能为空');
      }
    };
  }
  render() {
    const { loginModalVisible } = this.props;
    console.log('loginModalVisible');
    console.log(loginModalVisible);
    return (<div className="login">
      <Logo />
      <Input ref={(c) => { this.username = c; }} placeholder="手机号或邮箱" />
      <Input ref={(c) => { this.password = c; }} placeholder="密码" />
      <Button
        onClick={this.submit}
        type="primary"
        block
        style={{ width: '100%' }}
        rippleColor="rgba(255, 255, 255, .3)"
        during={1000}
      >
        确认
      </Button>
      <Oauth />
      <style jsx>{`
        .login {
          padding: 16px;
        }
        .flex {
          display: flex;
          width: 100%;
        }
        .input-code-button {
          width: 100px;
        }
      `}</style>
    </div>);
  }
}
