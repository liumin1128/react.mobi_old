import React from 'react';
import Input from '../form/input';
import Button from '../form/button';

export default () => (<div className="login">
  <Input name="nickname" placeholder="昵称" />
  <Input name="username" placeholder="手机号" />
  <div className="input-code">
    <Input name="code" placeholder="验证码" />
    <Button type="default" style={{ marginLeft: 16, fontSize: 12 }}>
      获取验证码
    </Button>
  </div>
  <Button type="primary" block>确认</Button>
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
