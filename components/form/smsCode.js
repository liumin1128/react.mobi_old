import React, { PureComponent } from 'react';
import Input from './input';
import Button from './button';
import SleepButton from './sleep-button';
import request from '../../utils/request';
import { VERIFY_PHONE } from '../../constants/api';

class SmsCode extends PureComponent {
  constructor(props) {
    super(props);
    this.test = async () => {
      try {
        const { value } = this.phone.input;
        console.log('value');
        console.log(value);
        this.sleep.sleep(60);
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
  }
  render() {
    return (<div>
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
          onClick={this.test}
          style={{ marginLeft: 8, fontSize: 12, minWidth: 120 }}
        >
          获取验证码
        </SleepButton>
      </div>
      <style jsx>{`
        .login {
          color: red;
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

export default SmsCode;
