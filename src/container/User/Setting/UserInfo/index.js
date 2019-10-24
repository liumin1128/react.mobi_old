import React from 'react';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { useQuery, useMutation } from '@apollo/react-hooks';
import TextField from '@/components/Form/TextField';
import UploadPictureField from '@/components/Form/Upload/Picture';
import SexField from '@/components/Form/Field/Sex';
import Snackbar from '@/components/Snackbar';
import Loading from '@/components/Loading';
import { USERINFO, UPDATE_USERINFO } from '@/graphql/schema/user';
import pp from '@/hoc/pp';
import { formatTime } from '@/utils/common';

function EditeUserInfo() {
  const { data, loading } = useQuery(USERINFO, { ssr: false });

  const [ updateUserInfo ] = useMutation(UPDATE_USERINFO);

  if (loading) return <Loading />;

  const { userInfo } = data;

  const initialValues = userInfo._id ? {
    nickname: userInfo.nickname,
    avatarUrl: userInfo.avatarUrl,
    sex: userInfo.sex,
    birthday: userInfo.birthday ? formatTime(userInfo.birthday, 'YYYY-MMM-DD') : null,
    sign: userInfo.sign,
  } : {};

  async function onSubmit(params) {
    const res = await updateUserInfo({ variables: { input: params } });
    if (res.data.result.status === 200) {
      Snackbar.success('更新成功');
    } else {
      Snackbar.success(res.data.result.message);
    }
  }

  return (

    <Box p={4} display="flex" justifyContent="center">
      <Box maxWidth={360} minWidth={200}>
        <Form
          onSubmit={onSubmit}
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

  );
}

export default EditeUserInfo;
