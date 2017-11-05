import React from 'react';
import Input from '../form/input';
import Button from '../form/button';
import SmsCode from '../form/smsCode';

export default () => (<div className="login">
  <Input name="nickname" placeholder="昵称" />
  <SmsCode />
  <Button type="primary" block>确认</Button>
  <style jsx>{`
    .login {
      color: red;
    }
  `}</style>
</div>);
