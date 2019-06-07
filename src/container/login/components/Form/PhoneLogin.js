import React, { PureComponent } from 'react';
import { Form, Field } from 'react-final-form';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@/components/Form/TextField';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import CircularProgress from '@material-ui/core/CircularProgress';
import { isPhoneNumber } from '@/utils/validate';
import SelectField from '../SelectField';
import CodeBtn from '../CodeBtn';

const validate = (values) => {
  const errors = {};

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

  console.log(errors);
  return errors;
};

const styles = (theme) => {
  return {
    item: {
      marginBottom: theme.spacing.unit * 3,
    },
    button: {
      height: 48,
      borderRadius: 6,
      boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
    },
  };
};


@withStyles(styles)
export default class phone extends PureComponent {
  render() {
    const { onSubmit, loading, classes } = this.props;
    const formData = {
      // nickname: '本王今年八岁',
      countryCode: '+86',
      // purePhoneNumber: '18629974148',
      // code: '434772',
    };
    return (
      <Form
        onSubmit={onSubmit}
        initialValues={formData}
        validate={validate}
        render={({ handleSubmit, values, valid, dirty, ...other }) => {
          return (
            <form id="createArticleForm" onSubmit={handleSubmit}>

              <Grid container spacing={2}>
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
                size="large"
                color="primary"
                type="submit"
                className={classes.button}
                // disabled={!dirty && !valid}
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
  }
}
