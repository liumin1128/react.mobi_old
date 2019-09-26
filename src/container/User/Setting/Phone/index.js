import React from 'react';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@/components/Form/TextField';
import { useMutation } from '@/hooks/graphql';
import { UPDATE_USER_PHONE, USERINFO } from '@/graphql/schema/user';
import Snackbar from '@/components/Snackbar';
import { isPhoneNumber } from '@/utils/validate';
import Loading from '@/components/Loading';
import { useOnMount } from '@/hooks';
import SelectCountries from '@/container/login/components/SelectField';
import CodeBtn from '@/container/login/components/CodeBtn';

const validate = (values) => {
  const errors = {};

  if (!values.countryCode) {
    errors.countryCode = '区号不能为空';
  }
  if (!values.purePhoneNumber) {
    errors.purePhoneNumber = '手机号不能为空';
  } else if (!isPhoneNumber(values.countryCode, values.purePhoneNumber)) {
    errors.purePhoneNumber = '手机号格式不正确';
  }

  if (!values.code) {
    errors.code = '验证码不能为空';
  }

  console.log(errors);
  return errors;
};


function EditeUserInfo() {
  const [ getUserInfo, userInfoData ] = useMutation(USERINFO, { ssr: false });
  const [ updateUserPassword ] = useMutation(UPDATE_USER_PHONE);

  useOnMount(async () => {
    if (!userInfoData.called) {
      await getUserInfo();
    }
  });

  if (!userInfoData.called || userInfoData.loading) return <Loading />;
  if (userInfoData.hasError) return userInfoData.error;

  const { userInfo } = userInfoData.data;

  // console.log(userInfo);

  const initialValues = getUserInfo ? {
    countryCode: userInfo.countryCode || '+86',
    purePhoneNumber: userInfo.purePhoneNumber,
  } : {};

  async function onSubmit(values) {
    const res = await updateUserPassword(values);
    if (res.hasError) {
      Snackbar.success('系统异常');
      return;
    }
    if (res.data.result.status === 200) {
      Snackbar.success('手机号更新成功');
    } else {
      Snackbar.success(res.data.result.message);
    }
  }

  const disabled = Boolean(userInfo.phoneNumber);


  return (
    <Box p={4} width={1} display="flex" justifyContent="center">
      <Box maxWidth={360} minWidth={200} width={1}>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          initialValues={initialValues}
          render={({ handleSubmit, values }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs>
                  <Field
                    fullWidth
                    type="text"
                    key="countryCode"
                    name="countryCode"
                    label="国家"
                    margin="normal"
                    component={SelectCountries}
                    disabled={disabled}
                  />
                </Grid>
                <Grid item xs={8}>
                  <Field
                    fullWidth
                    type="text"
                    key="purePhoneNumber"
                    name="purePhoneNumber"
                    label="手机号"
                    margin="normal"
                    component={TextField}
                    disabled={disabled}
                  />
                </Grid>
              </Grid>
              {!disabled && (
                <>
                  <Field
                    fullWidth
                    key="code"
                    name="code"
                    label="验证码"
                    component={TextField}
                    disabled={disabled}
                    type="text"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment variant="filled" position="end">
                          <CodeBtn values={values} />
                        </InputAdornment>
                      ),
                    }}
                  />
                  <Box mt={4} />
                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    type="submit"
                    disabled={disabled}
                  >
                    确认
                  </Button>
                </>
              )}
            </form>
          )}
        />
      </Box>
    </Box>
  );
}

export default EditeUserInfo;
