import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form';
import Link from 'next/link';
import MyButton from '../../components/button';
import { isTel } from '../../utils/common';
import { renderField, renderFieldCode, renderFieldPhone } from './renderFeild';

const styles = (theme) => {
  // console.log('theme');
  // console.log(theme);
  return {
    root: {
      maxWidth: 360,
      margin: '0 auto',
      paddingTop: 32,
    },
    input: {
      width: '100%',
      marginBottom: 16,
    },
    phone: {
      width: '100%',
      marginBottom: 16,
      '& input': {
        paddingLeft: 100,
        boxShadow: '0 0 0 1000px white inset',
        outline: 'none',
      },
    },
    code: {
      width: '100%',
      marginBottom: 16,
      '& input': {
        paddingRight: 100,
        boxShadow: '0 0 0 1000px white inset',
        outline: 'none',
      },
    },
    formRoot: {
      padding: '32px 16px',
      '@media (min-width:600px)': {
        maxWidth: 400,
        // border: '1px red solid',
        margin: '0 auto',
      },
    },
    select: {
      width: 100,
    },
    more: {
      fontSize: 12,
      display: 'flex',
      justifyContent: 'space-between',
      color: '#999',
      marginTop: 16,
      '& a': {
        color: 'red',
      },
    },
  };
};

const validate = (values) => {
  console.log(values);
  const errors = {};
  if (!values.phone) {
    errors.phone = '手机号不能为空';
    errors.code = { error: true, message: '手机号不能为空' };
  } else if (!isTel(values.phone)) {
    errors.phone = '手机号格式不正确';
    errors.code = { error: true, message: '手机号格式不正确' };
  } else {
    errors.code = { error: false, phone: values.phone };
  }
  const requiredFields = [
    'phone',
    'nickname',
    'password',
    'confirmPassword',
    // 'code',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = '不能为空';
    }
  });
  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = '两次密码不一样';
  }

  if (values.code) {
    delete errors.code;
  }

  return errors;
};

@connect()
@withStyles(styles)
@reduxForm({ form: 'contact', validate })
export default class extends PureComponent {
  submit = ({ confirmPassword, ...other }) => {
    const { dispatch, close } = this.props;
    dispatch({
      type: 'user/register',
      payload: other,
      cb: close,
    });
  }
  sentSMS = (phone) => {
    const { dispatch } = this.props;
    dispatch({ type: 'common/sentSmsCode', payload: { phone } });
  }
  render() {
    const {
      classes, handleSubmit, pristine, reset, submitting, ...other
    } = this.props;

    // console.log('xxxxxxxxx login xxxxxxxxxx');
    // console.log(other);
    return (<div className={classes.root}>
      <section>
        <div className={classes.formRoot}>
          <form onSubmit={handleSubmit(this.submit)}>

            <Field
              name="phone"
              component={renderFieldPhone}
              type="text"
              placeholder="手机号"
              // autoFocus
              className={classes.phone}
            />
            <Field
              name="code"
              component={renderFieldCode}
              type="text"
              placeholder="验证码"
              className={classes.code}
              sentSMS={this.sentSMS}
            />
            <Field
              name="nickname"
              component={renderField}
              type="text"
              placeholder="昵称（2-10个字符，中英文、数字下划线）"
              className={classes.input}
            />
            <Field
              name="password"
              component={renderField}
              type="password"
              placeholder="密码（不少于6位）"
              className={classes.input}
            />
            <Field
              name="confirmPassword"
              component={renderField}
              type="password"
              placeholder="请再次输入密码"
              className={classes.input}
            />
            <MyButton focusRipple type="submit">手机号登录</MyButton>
          </form>
          <div className={classes.more} >
            <span>邮箱注册</span>
            <Link href={'/login'} ><a>立即登录</a></Link>
          </div>
        </div>
      </section>
    </div>);
  }
}
