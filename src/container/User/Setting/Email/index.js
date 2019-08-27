import React from 'react';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@/components/Form/TextField';
import { useMutation } from '@/hooks/graphql';
import { UPDATE_USER_EMAIL, USERINFO } from '@/graphql/schema/user';
import Snackbar from '@/components/Snackbar';
import { checkEmail } from '@/utils/common';
import Loading from '@/components/Loading';
import { useOnMount } from '@/hooks';


const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = '邮箱不可以为空';
  } else if (!checkEmail(values.email)) {
    errors.email = '邮箱格式不正确';
  }
  return errors;
};

function EditeUserInfo() {
  const [ getUserInfo, userInfoData ] = useMutation(USERINFO, { ssr: false });
  const [ updateUserPassword ] = useMutation(UPDATE_USER_EMAIL);

  useOnMount(async () => {
    if (!userInfoData.called) {
      await getUserInfo();
    }
  });

  if (!userInfoData.called || userInfoData.loading) return <Loading />;
  if (userInfoData.hasError) return userInfoData.error;

  const { userInfo } = userInfoData.data;

  const initialValues = getUserInfo ? {
    email: userInfo.email || userInfo.unverified_email,
  } : {};

  async function onSubmit({ email }) {
    console.log('email');
    console.log(email);
    const res = await updateUserPassword({ email });
    if (res.hasError) {
      Snackbar.success('系统异常');
      return;
    }
    if (res.data.result.status === 200) {
      Snackbar.success('更新成功');
    } else {
      Snackbar.success(res.data.result.message);
    }
  }


  return (
    <Box p={4} width={1} display="flex" justifyContent="center">
      <Box maxWidth={400} width={1}>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          initialValues={initialValues}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>

              <Field
                fullWidth
                margin="normal"
                name="email"
                label="邮箱"
                component={TextField}
              />

              <Box mt={4} />

              <Button
                variant="outlined"
                color="primary"
                fullWidth
                type="submit"
              >
                确认
              </Button>
            </form>
          )}
        />
      </Box>
    </Box>
  );
}

export default EditeUserInfo;
