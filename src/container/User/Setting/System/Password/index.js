import React from 'react';
import { Form, Field } from 'react-final-form';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@/components/Form/TextField';
import { useMutation } from '@/hooks/graphql';
import { UPDATE_PASSWORD } from '@/graphql/schema/user';
import Snackbar from '@/components/Snackbar';
import PasswordStrength from './components/PasswordStrength';

const validate = (values) => {
  const errors = {};
  // if (!values.oldPassword) {
  //   errors.oldPassword = '原密码不可以为空';
  // }
  if (!values.password) {
    errors.password = '新密码不可以为空';
  } else if (values.password.length < 8) {
    errors.password = '新密码太短了';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = '确认密码不可以为空';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = '两次密码不一样';
  }
  return errors;
};

function EditeUserInfo() {
  const [ updateUserPassword ] = useMutation(UPDATE_PASSWORD);

  async function onSubmit({ oldPassword, password }) {
    const res = await updateUserPassword({ input: { oldPassword, password } });
    console.log('res');
    console.log(res);
    if (res.data.result.status === 200) {
      Snackbar.success('更新成功');
    } else {
      Snackbar.success(res.data.result.message);
    }
  }


  return (
    <Box p={4} display="flex" justifyContent="center">
      <Box maxWidth={400}>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>

              <Field
                fullWidth
                margin="normal"
                name="oldPassword"
                label="原密码"
                type="password"
                component={TextField}
                helperText="首次设置，无需填写原密码"
              />

              <Field
                fullWidth
                margin="normal"
                name="password"
                label="新密码"
                type="password"
                component={TextField}
                InputProps={{
                  endAdornment: values.password ? <PasswordStrength password={values.password} /> : null,
                }}
              />

              <Field
                fullWidth
                margin="normal"
                name="confirmPassword"
                label="确认密码"
                type="password"
                component={TextField}
              />

              <Box mt={4} />

              <Button
                variant="outlined"
                color="primary"
                fullWidth
                type="submit"
              >
                    确认修改
              </Button>
            </form>
          )}
        />
      </Box>
    </Box>
  );
}

export default EditeUserInfo;
