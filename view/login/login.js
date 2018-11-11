import React, { PureComponent } from 'react';
import { Form, Field } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@/components/Form/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Mutation } from 'react-apollo';
import { USER_LOGIN } from '@/graphql/schema/user';
import Snackbar from '@/components/Snackbar';

const registerValidate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = '用户名不能为空';
  }
  if (!values.password) {
    errors.password = '密码不能为空';
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
    const { classes } = this.props;
    return (
      <Mutation mutation={USER_LOGIN}>
        {(mutation, { loading, error, data = {} }) => {
          const onLogin = async (values) => {
            try {
              const { data: { result: { status, message } } } = await mutation({
                variables: values,
                // refetchQueries: ['ArticleList'],
              });

              Snackbar.success(message);

              // Snackbar.success(`[${status}]${message}`);
            } catch (err) {
              Snackbar.success('用户名或密码错误');
              console.log('err');
              console.log(err);
            }
          };

          return (
            <Form
              onSubmit={onLogin}
              validate={registerValidate}
              render={({ handleSubmit, values, valid, dirty, ...other }) => {
                console.log('other');
                console.log(other);
                return (
                  <form id="createArticleForm" onSubmit={handleSubmit}>

                    <Field
                      key="username"
                      name="username"
                      label="用户名"
                      className={classes.item}
                      component={TextField}
                      type="text"
                      fullWidth
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
                      登录
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
