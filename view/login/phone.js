import React, { PureComponent } from 'react';
import { Form, Field } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@/components/Form/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Mutation } from 'react-apollo';
import { USER_LOGIN_BY_PHONENUMBER_CODE } from '@/graphql/schema/user';
import Snackbar from '@/components/Snackbar';
import { isPhoneNumber } from '@/utils/validate';
import { setStorage } from '@/utils/store';
import { USER_TOKEN } from '@/config/base';
import SelectField from './components/SelectField';
import CodeBtn from './components/CodeBtn';
import PhoneLogin from './components/Form/PhoneLogin';

export default class LoginForm extends PureComponent {
  render() {
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
