import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { Form, Field } from 'react-final-form';
import Card, { CardHeader, CardMedia, CardContent } from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@/components/form/textField';
import { USER_LOGIN } from '@/graphql/user';
import { STORE_USER_KEY } from '@/constants/base';
import { setStorage } from '@/utils/store';
import snackbar from '@/components/snackbar';

export default class Login extends PureComponent {
  validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = '用户名不能为空';
    }
    if (!values.password) {
      errors.password = '密码不能为空';
    }
    return errors;
  }
  render() {
    const { close } = this.props;
    return (
      <Mutation mutation={USER_LOGIN}>
        {(userLogin, { loading, error, data = {} }) => {
          // if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <CardContent>
              <Form
                onSubmit={async (value) => {
                  const { data: { result } } = await userLogin({ variables: value });
                  const { status, message, userInfo, token } = result;
                  snackbar.error(message);
                  if (status === 200) {
                    await setStorage(STORE_USER_KEY, { token, userInfo });
                    close();
                  }
                }}
                // initialValues={initialValue}
                validate={this.validate}
                render={({ handleSubmit, reset, submitting, pristine, change, values }) => (
                  <form onSubmit={handleSubmit}>
                    <Field
                      name="username"
                      label="username"
                      type="text"
                      component={TextField}
                      margin="normal"
                      // placeholder="请输入关键字"
                    />
                    <br />
                    <Field
                      name="password"
                      label="password"
                      type="password"
                      component={TextField}
                      margin="normal"
                      // placeholder="请输入关键字"
                    />
                    <br />
                    <Button
                      // variant="raised"
                      color="primary"
                      type="submit"
                      size="large"
                      // loading={createLoading}
                      // disabled={submitting || pristine}
                    >LET`S GO</Button>
                  </form>
                )}
              />
            </CardContent>
          );
        }}
      </Mutation>);
  }
}
