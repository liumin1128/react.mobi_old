import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@/components/Form/TextField';
import UploadPictureField from '@/components/Form/Upload/Picture';
import SexField from '@/components/Form/Field/Sex';
import Snackbar from '@/components/Snackbar';
import Loading from '@/components/Loading';
import { useMutation } from '@/hooks/graphql';
import { USERINFO, UPDATE_USERINFO } from '@/graphql/schema/user';
import { useOnMount } from '@/hooks';
import pp from '@/hoc/pp';
import { formatTime } from '@/utils/common';

const validate = (values) => {
  const errors = {};
  if (!values.oldPassword) {
    errors.oldPassword = '原密码不可以为空';
  }
  if (!values.password) {
    errors.password = '新密码不可以为空';
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = '确认密码不可以为空';
  }
  return errors;
};

function EditeUserInfo() {
  const [ getUserInfo, getUserInfoData ] = useMutation(USERINFO);
  const [ updateUserInfo, updateUserInfoData ] = useMutation(UPDATE_USERINFO);
  useOnMount(async () => {
    if (!getUserInfoData.called) {
      await getUserInfo();
    }
  });

  if (!getUserInfoData.called || getUserInfoData.loading) return <Loading />;
  if (getUserInfoData.hasError) return getUserInfoData.error;

  const { userInfo } = getUserInfoData.data;

  console.log(userInfo);

  const initialValues = userInfo._id ? {
    nickname: userInfo.nickname,
    avatarUrl: userInfo.avatarUrl,
    sex: userInfo.sex,
    birthday: userInfo.birthday ? formatTime(userInfo.birthday, 'YYYY-MMM-DD') : null,
    sign: userInfo.sign,
  } : {};


  async function onSubmit(params) {
    console.log('params');
    console.log(params);
    // const res = await updateUserInfo({ input: params });
    // console.log('res');
    // console.log(res);
    // if (res.data.result.status === 200) {
    //   Snackbar.success('更新成功');
    // } else {
    //   Snackbar.success(res.data.result.message);
    // }
  }


  return (
    <div>
      <Card>
        <Box p={4} display="flex" justifyContent="center">
          <Box maxWidth={400}>
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>

                  <Field
                    fullWidth
                    margin="normal"
                    name="oldPassword"
                    label="原密码"
                    component={TextField}
                  />

                  <Field
                    fullWidth
                    margin="normal"
                    name="password"
                    label="新密码"
                    component={TextField}
                  />

                  <Field
                    fullWidth
                    margin="normal"
                    name="confirmPassword"
                    label="确认密码"
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
      </Card>
    </div>
  );
}

export default EditeUserInfo;
