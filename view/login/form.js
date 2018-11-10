import React, { PureComponent } from 'react';
import { Form, Field } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@/components/Form/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SelectField from './SelectField';
import CodeBtn from './CodeBtn';

const formKeys = [
  {
    key: 'username',
    label: '用户名',
  },
  {
    key: 'password',
    label: '密码',
    type: 'password',
  },
];

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = '用户名不能为空';
  }
  if (!values.password) {
    errors.password = '密码不能为空';
  }
  return errors;
};

const registerValidate = (values) => {
  const errors = {};
  if (!values.nickname) {
    errors.nickname = '昵称不能为空';
  }
  if (!values.countryCode) {
    errors.countryCode = '区号不能为空';
  }
  if (!values.purePhoneNumber) {
    errors.purePhoneNumber = '验证码不能为空';
  }
  if (!values.code) {
    errors.code = '验证码不能为空';
  }
  return errors;
};

const styles = (theme) => {
  return {
    item: {
      marginBottom: theme.spacing.unit * 3,
    },
    getCode: {
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  };
};

@withStyles(styles)
export default class LoginForm extends PureComponent {
  state = {
    mode: 'register',
  }

  onSubmit = (values) => {
    const { onSubmit } = this.props;
    if (onSubmit) onSubmit(values);
  }

  onRegister = (values) => {
    console.log('values');
    console.log(values);
  }


  renderLogin() {
    return (
      <Form
        onSubmit={this.onSubmit}
        // initialValues={formData}
        // values={formData}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, change, values }) => (
          <form id="createArticleForm" onSubmit={handleSubmit}>
            {
              formKeys.map(i => (
                <Field
                  key={i.key}
                  name={i.key}
                  label={i.label}
                  component={TextField}
                  type="text"
                  fullWidth
                  // value={formData[i.key]}
                  {...i.props}
                />
              ))
            }
            <br />
            <br />

            <Button
              variant="contained"
              // size="small"
              color="primary"
              type="submit"
              style={{ marginRight: 16 }}
            >
                登录
            </Button>
            <Button
              // variant="contained"
              size="small"
              color="primary"
              onClick={() => { window.location.href = 'https://api.react.mobi/oauth/github'; }}
            >
                Github
            </Button>
            <Button
              // variant="contained"
              size="small"
              color="primary"
              onClick={() => { window.location.href = 'https://api.react.mobi/oauth/wechat'; }}
            >
              wechat
            </Button>

            <Button
              // variant="contained"
              size="small"
              color="primary"
              onClick={() => { window.location.href = 'https://api.react.mobi/oauth/wechat'; }}
            >
              login
            </Button>
          </form>
        )}
      />
    );
  }


  renderRegister() {
    const formData = {
      countryCode: '+86',
      purePhoneNumber: '18629974148',
    };

    const { classes } = this.props;
    return (
      <Form
        onSubmit={this.onRegister}
        initialValues={formData}
        validate={registerValidate}
        render={({ handleSubmit, reset, submitting, pristine, change, values }) => {
          console.log('values');
          console.log(values);
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

              <Button
                variant="contained"
                // size="small"
                color="primary"
                type="submit"
                style={{ marginRight: 16 }}
              >
            登录
              </Button>

            </form>
          );
        }

        }
      />
    );
  }

  render() {
    const { mode } = this.state;
    if (mode === 'register') return this.renderRegister();
    return this.renderLogin();
  }
}
