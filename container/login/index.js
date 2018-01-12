import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form';
import Link from 'next/link';
import Input from '../../components/input';
import Button from '../../components/button';
import Oauth from './oauth';
import { renderField } from './renderFeild';

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
    formRoot: {
      padding: '32px 16px',
      '@media (min-width:600px)': {
        maxWidth: 400,
        // border: '1px red solid',
        margin: '0 auto',
      },
    },
    phone: {
      flex: 1,
      display: 'flex',
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
  // console.log(values);
  const errors = {};
  const requiredFields = [
    'username',
    'password',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = '不能为空';
    }
  });
  return errors;
};

@connect()
@withStyles(styles)
@reduxForm({ form: 'contact', validate })
export default class extends PureComponent {
  submit = (values) => {
    const { dispatch, close } = this.props;
    dispatch({
      type: 'user/login',
      payload: values,
      cb: close,
    });
  }
  render() {
    const {
      classes, handleSubmit, pristine, reset, submitting,
    } = this.props;

    console.log('xxxxxxxxx login xxxxxxxxxx');
    return (<div className={classes.root}>
      <section>
        <div className={classes.formRoot}>
          <form onSubmit={handleSubmit(this.submit)}>
            <Field
              name="username"
              component={renderField}
              type="text"
              placeholder="手机号"
              // autoFocus
              className={classes.input}
            />
            <Field
              name="password"
              component={renderField}
              type="password"
              placeholder="密码"
              className={classes.input}
            />
            <Button focusRipple type="submit">登录</Button>
          </form>
          <div className={classes.more} >
            <span>忘记密码</span>
            <Link href={'/login/register'} ><a>注册</a></Link>
          </div>
          <Oauth />
        </div>
      </section>
    </div>);
  }
}
