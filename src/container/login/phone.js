import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { USER_LOGIN_BY_PHONENUMBER_CODE } from '@/graphql/schema/user';
import Snackbar from '@/components/Snackbar';
import { setStorage } from '@/utils/store';
import { USER_TOKEN } from '@/config/base';
import PhoneLogin from './components/Form/PhoneLogin';

export default class LoginForm extends PureComponent {
  render() {
    const { onLoginSuccess } = this.props;
    return (
      <Mutation mutation={USER_LOGIN_BY_PHONENUMBER_CODE}>
        {(mutation, { loading, error, data = {} }) => {
          const onRegister = async (values) => {
            try {
              const { data: { result: { status, message, token } } } = await mutation({
                variables: values,
                // refetchQueries: ['ArticleList'],
              });
              if (status === 200) {
                await setStorage(USER_TOKEN, token);
                if (onLoginSuccess) {
                  await onLoginSuccess();
                } else {
                  window.location.href = '/';
                }
              }
              Snackbar.success(message);
            } catch (err) {
              Snackbar.success('登录失败');
              console.log('err');
              console.log(err);
            }
          };
          return <PhoneLogin onSubmit={onRegister} loading={loading} />;
        }}
      </Mutation>

    );
  }
}
