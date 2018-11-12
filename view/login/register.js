import React, { PureComponent } from 'react';
import { Form, Field } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@/components/Form/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Mutation } from 'react-apollo';
import { USER_REGISTER } from '@/graphql/schema/user';
import Snackbar from '@/components/Snackbar';
import { isPhoneNumber } from '@/utils/validate';
import { setStorage } from '@/utils/store';
import { USER_TOKEN } from '@/config/base';

import SelectField from './components/SelectField';
import CodeBtn from './components/CodeBtn';

const validate = (values) => {
  const errors = {};
  if (!values.nickname) {
    errors.nickname = '昵称不能为空';
  }
  if (!values.countryCode) {
    errors.countryCode = '区号不能为空';
  }
  if (!values.purePhoneNumber) {
    errors.purePhoneNumber = '手机号不能为空';
  } else if (!isPhoneNumber(values.countryCode, values.purePhoneNumber)) {
    console.log(isPhoneNumber(values.countryCode, values.purePhoneNumber));
    errors.purePhoneNumber = '手机号格式不正确';
  }

  if (!values.code) {
    errors.code = '验证码不能为空';
  }

  if (!values.password) {
    errors.password = '密码不能为空';
  }
  if (!values.password2) {
    errors.password2 = '确认密码不能为空';
  } else if (values.password !== values.password2) {
    errors.password2 = '两次输入密码不一致';
  }

  console.log(errors);
  return errors;
};

const styles = (theme) => {
  return {
    item: {
      marginBottom: theme.spacing.unit * 3,
    },
  };
};

@withStyles(styles)
export default class LoginForm extends PureComponent {
  render() {
    const formData = {
      // nickname: '本王今年八岁',
      countryCode: '+86',
      // purePhoneNumber: '18629974148',
      // code: '168102',
    };

    const { classes, onLoginSuccess } = this.props;
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

          return (
            <Form
              onSubmit={onRegister}
              initialValues={formData}
              validate={validate}
              render={({ handleSubmit, values, valid, dirty, ...other }) => {
                // console.log('other');
                // console.log(other);
                return (
                  <form id="createArticleForm" onSubmit={handleSubmit}>

                    <Field
                      key="nickname"
                      name="nickname"
                      label="昵称"
                      className={classes.item}
                      component={TextField}
                      type="text"
                      fullWidth
                    />

                    <Grid container spacing={16}>
                      <Grid item xs>
                        <Field
                          fullWidth
                          key="countryCode"
                          name="countryCode"
                          label="国家"
                          // value={10}
                          className={classes.item}
                          component={SelectField}
                          type="text"
                        />
                      </Grid>
                      <Grid item xs={8}>
                        <Field
                          fullWidth
                          key="purePhoneNumber"
                          name="purePhoneNumber"
                          label="手机号"
                          className={classes.item}
                          component={TextField}
                          type="text"
                        />
                      </Grid>
                    </Grid>

                    <Field
                      fullWidth
                      key="code"
                      name="code"
                      label="验证码"
                      className={classes.item}
                      component={TextField}
                      type="text"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment variant="filled" position="end">
                            <CodeBtn values={values} />
                          </InputAdornment>
                        ),
                      }}
                    />

                    <Field
                      key="password"
                      name="password"
                      label="密码"
                      className={classes.item}
                      component={TextField}
                      type="password"
                      fullWidth
                    />

                    <Field
                      key="password2"
                      name="password2"
                      label="确认密码"
                      className={classes.item}
                      component={TextField}
                      type="password"
                      fullWidth
                    />

                    <Button
                      variant="contained"
                      size="large"
                      color="primary"
                      type="submit"
                      style={{ marginRight: 16 }}
                      disabled={!dirty && !valid}
                      fullWidth
                    >
                      {loading && <CircularProgress style={{ marginRight: 8 }} color="inherit" size={14} thickness={5} />}
                      注册
                    </Button>

                  </form>
                );
              }}
            />
          );
        }}

      </Mutation>

    );
  }
}
