import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { USER_REGISTER } from '@/graphql/schema/user';
import Snackbar from '@/components/Snackbar';
import { setStorage } from '@/utils/store';
import { USER_TOKEN } from '@/config/base';
import Register from './components/Form/Register';


export default class LoginForm extends PureComponent {
  render() {
    const { onLoginSuccess } = this.props;
    return (
      <Mutation mutation={USER_REGISTER}>
        {(mutation, { loading, error, data = {} }) => {
          const onRegister = async ({ password2, ...values }) => {
            try {
              // console.log('values');
              // console.log(values);

              const { data: { result: { status, message, token } } } = await mutation({
                variables: { input: values },
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

              // Snackbar.success(`[${status}]${message}`);
            } catch (err) {
              console.log('err');
              console.log(err);
            }
          };

          return <Register onSubmit={onRegister} loading={loading} />;
        }}

      </Mutation>

    );
  }
}
