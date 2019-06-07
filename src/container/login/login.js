import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { USER_LOGIN } from '@/graphql/schema/user';
import Snackbar from '@/components/Snackbar';
import { setStorage } from '@/utils/store';
import { USER_TOKEN } from '@/config/base';
import PhoneLogin from './components/Form/Login';

export default class LoginForm extends PureComponent {
  render() {
    const { onLoginSuccess } = this.props;
    return (
      <Mutation mutation={USER_LOGIN}>
        {(mutation, { loading, error, data = {} }) => {
          const onLogin = async (values) => {
            try {
              const { data: { result: { status, message, token } } } = await mutation({
                variables: values,
                // refetchQueries: [ 'userLogin' ],
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

              // Snackbar.success(`[${status}]${message}`);
            } catch (err) {
              Snackbar.success('用户名或密码错误');
              console.log('err');
              console.log(err);
            }
          };
          return <PhoneLogin onSubmit={onLogin} loading={loading} />;
        }}
      </Mutation>
    );
  }
}
