import React, { PureComponent } from 'react';
import Input from '../form/input';
import Button from '../form/button';
import SleepButton from '../form/sleep-button';
import request from '../../utils/request';

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
            alert('验证码已发送');
            this.sleep.sleep(60);
          } else {
            alert('验证码发送失败');
          }
        } else {
          alert('干啥，填手机号呀');
        }
      } catch (error) {
        console.log('发送验证码error');
        console.log(error);
      }
      // const data = await request(VERIFY_PHONE, {  });
    };
    this.submit = () => {
      const nickname = this.nickname.input.value;
      const phone = this.phone.input.value;
      const code = this.code.input.value;
      if (nickname && phone && code) {
        console.log('nickname, phone, code');
        console.log(nickname, phone, code);
      } else {
        alert('不能为空');
      }
    };
  }
  render() {
    return (<div className="login">
      <Input
        ref={(c) => { this.nickname = c; }}
        name="nickname"
        placeholder="昵称"
      />
      <Input
        ref={(c) => { this.phone = c; }}
        name="phone"
        placeholder="手机号"
      />
      <div className="input-code">
        <Input
          name="code"
          ref={(c) => { this.code = c; }}
          placeholder="验证码"
        />
        <SleepButton
          ref={(c) => { this.sleep = c; }}
          onClick={this.sentSms}
          style={{ marginLeft: 8, fontSize: 12, minWidth: 120 }}
        >
          获取验证码
        </SleepButton>
      </div>
      <Button
        type="primary"
        block
        onClick={this.submit}
      >
        确认
      </Button>
      <style jsx>{`
        .login {
          padding: 16px;
        }
        .input-code {
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
