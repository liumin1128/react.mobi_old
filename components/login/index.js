import React, { PureComponent } from 'react';
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import Input from '../form/input';
import Button from '../form/button';
import Select from '../form/select';
import Oauth from './oauth';
import Logo from './logo';
import SleepButton from '../form/sleep-button';
import request from '../../utils/request';
import { PHONE_COUNTRIY } from '../../constants/common';
import { VERIFY_PHONE } from '../../constants/api';
import Modal from '../modal';

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
}))
export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.sentSms = async () => {
      try {
        const { value } = this.phone.input;
        console.log('value');
        console.log(value);
        if (value) {
          const data = await request(VERIFY_PHONE, { phone: value });
          console.log('data');
          console.log(data);
          if (data && data.status === 'ok') {
            toast('验证码已发送');
            this.sleep.sleep(60);
          } else {
            toast('验证码发送失败');
          }
        } else {
          toast('干啥，填手机号呀');
        }
      } catch (error) {
        toast('验证码发送失败');
        console.log('发送验证码error');
        console.log(error);
      }
      // const data = await request(VERIFY_PHONE, {  });
    };
    this.submit = () => {
      // toast('Warning Notification !');
      const nickname = this.nickname.input.value;
      const phone = this.phone.input.value;
      const code = this.code.input.value;
      const country = this.country.select.value;
      if (nickname && phone && code && country) {
        console.log('nickname, phone, code, country');
        console.log(nickname, phone, code, country);
      } else {
        toast('不能为空');
      }
    };
  }
  render() {
    const { loginModalVisible, close } = this.props;
    console.log('loginModalVisible');
    console.log(loginModalVisible);
    return (<Modal visible={loginModalVisible} onClose={close}><div className="login">
      <Logo />
      <Input ref={(c) => { this.nickname = c; }} placeholder="昵称" />
      <div className="flex">
        <Select
          style={{ maxWidth: 100 }}
          ref={(c) => { this.country = c; }}
          placeholder="昵称"
          onChange={(val) => {
            console.log(val);
            const country = this.country.select.value;
            if (country === '火星') {
              toast('你是认真的吗？');
              this.country.select.value = '+86';
            }
          }}
        >
          {
            PHONE_COUNTRIY.map(({ code, name }) =>
              (<option key={code} value={code}>
                {name}
              </option>))
          }
          <option value={'火星'} >
            火星
          </option>
        </Select>
        <Input style={{ borderLeft: 0 }} ref={(c) => { this.phone = c; }} placeholder="手机号" />
      </div>
      <div className="flex">
        <Input ref={(c) => { this.code = c; }} placeholder="验证码" />
        <SleepButton
          ref={(c) => { this.sleep = c; }}
          onClick={this.sentSms}
          style={{ fontSize: 12, minWidth: 120 }}
        >
          获取验证码
        </SleepButton>
      </div>
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
    </div></Modal>);
  }
}
