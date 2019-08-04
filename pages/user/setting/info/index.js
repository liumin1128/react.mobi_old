import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@/components/Form/TextField';
import UploadPictureField from '@/components/Form/Upload/Picture';
import SexField from '@/components/Form/Field/Sex';
import Snackbar from '@/components/Snackbar';
import { useMutation } from '@/hooks/graphql';
import { USERINFO, UPDATE_USERINFO } from '@/graphql/schema/user';
import { useOnMount } from '@/hooks';
import pp from '@/hoc/pp';

function EditeUserInfo() {
  const [ getUserInfo, getUserInfoData ] = useMutation(USERINFO);
  const [ updateUserInfo, updateUserInfoData ] = useMutation(UPDATE_USERINFO);
  useOnMount(async () => {
    if (!getUserInfoData.called) {
      await getUserInfo();
    }
  });

  if (!getUserInfoData.called || getUserInfoData.loading) return 'loading';
  if (getUserInfoData.hasError) return getUserInfoData.error;

  const { userInfo } = getUserInfoData.data;

  console.log(userInfo);

  const initialValues = userInfo._id ? {
    nickname: userInfo.nickname,
    avatarUrl: userInfo.avatarUrl,
    sex: userInfo.sex,
    birthday: userInfo.birthday,
    sign: userInfo.sign,
  } : {};

  async function handleSubmit(params) {
    const res = await updateUserInfo({ input: params });
    console.log('res');
    console.log(res);
    if (res.data.result.status === 200) {
      Snackbar.success('更新成功');
    } else {
      Snackbar.success(res.data.result.message);
    }
  }


  return (
    <div>
      <Card>
        <Box p={4} display="flex" justifyContent="center">
          <Box maxWidth={400}>
            <Form
              onSubmit={handleSubmit}
              initialValues={initialValues}
              render={({ handleSubmit }) => (

                <form onSubmit={handleSubmit}>


                  <Field
                    fullWidth
                    margin="normal"
                    name="avatarUrl"
                    label="头像"
                    component={pp(UploadPictureField, { width: 160 })}
                  />


                  <Field
                    fullWidth
                    margin="normal"
                    name="nickname"
                    label="用户昵称"
                    component={TextField}
                  />


                  <Field
                    fullWidth
                    margin="normal"
                    name="sex"
                    label="性别"
                    InputLabelProps={{ shrink: true }}
                    component={SexField}
                  />


                  <Field
                    fullWidth
                    margin="normal"
                    type="date"
                    name="birthday"
                    label="生日"
                    InputLabelProps={{ shrink: true }}
                    component={TextField}
                  />

                  <Field
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="sign"
                    label="个性签名"
                    multiline
                    rows="4"
                    component={TextField}
                  />


                  <Box mt={2} />

                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
                    type="submit"
                  >
                    保存
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
