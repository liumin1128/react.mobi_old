import React, { PureComponent, Fragment } from 'react';
import { graphql } from 'react-apollo';
import { withRouter } from 'next/router';
import { USER_LOGIN } from '@/graphql/schema/user';
import { USER_TOKEN } from '@/config/base';
import { setStorage } from '@/utils/store';
import Snackbar from '@/components/Snackbar';

import Form from './form';


@withRouter
@graphql(USER_LOGIN)
export default class Login extends PureComponent {
  onSubmit = async (values) => {
    try {
      const { mutate, router } = this.props;
      const { data: { result: data } } = await mutate({ variables: values });
      if (data.status === 200) {
        await Snackbar.success('登录成功');
        await setStorage(USER_TOKEN, data.token);
        await router.push('/');
      }
      await Snackbar.success('用户名或密码错误');
    } catch (error) {
      console.log('error');
      console.log(error);
    }
  }

  render() {
    return (
      <Fragment>
        <Form onSubmit={this.onSubmit} />
      </Fragment>
    );
  }
}
