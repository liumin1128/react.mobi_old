import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@/components/Form/TextField';
import UploadPictureField from '@/components/Form/Upload/Picture';
import { useMutation } from '@/hooks/graphql';
import { USERINFO } from '@/graphql/schema/user';
import { useOnMount } from '@/hooks';
import pp from '@/hoc/pp';

function EditeUserInfo() {
  const [ getUserInfo, { called, data, error, hasError, loading } ] = useMutation(USERINFO);
  useOnMount(async () => {
    if (!called) {
      await getUserInfo();
    }
  });

  if (!called || loading) return 'loading';
  if (hasError) return error;

  console.log('data');
  console.log(data);

  const { userInfo } = data;

  console.log(userInfo);


  return (
    <div>
      <Card>
        <Box p={2} display="flex" justifyContent="center">
          <Box maxWidth={500}>
            <Form
              onSubmit={(values) => {
                console.log('values');
                console.log(values);
              }}
              initialValues={userInfo}
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
                // variant="outlined"
                    name="usename"
                    label="用户名"
                    component={TextField}
                  />

                  <Field
                    fullWidth
                    margin="normal"
                // variant="outlined"
                    name="nickname"
                    label="用户昵称"
                    component={TextField}
                  />

                  <Field
                    fullWidth
                    margin="normal"
                // variant="outlined"
                    name="phone"
                    label="手机号"
                    type="tel"
                    component={TextField}
                  />
                  <Field
                    fullWidth
                    margin="normal"
                // variant="outlined"
                    name="email"
                    label="邮箱"
                    type="email"
                    component={TextField}
                  />
                  <Field
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="bio"
                    label="个人简介"
                    multiline
                    rows="4"
                    component={TextField}
                  />

                  <Box mt={2} />

                  <Button
                    variant="outlined"
                    color="primary"
                    fullWidth
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
