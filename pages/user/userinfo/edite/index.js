import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import TextField from '@/components/Form/TextField';
import UploadPictureField from '@/components/Form/Upload/Picture';
import { useMutation } from '@/hooks/graphql';
import { USERINFO } from '@/graphql/schema/user';
import { useOnMount } from '@/hooks';
import pp from '@/hoc/pp';

function EditeUserInfo() {
  const [ getUserInfo, { called, data, error, hasError, loading } ] = useMutation(USERINFO);
  useOnMount(async () => {
    await getUserInfo();
  });

  if (!called || loading) return 'loading';
  if (hasError) return error;

  console.log('data');
  console.log(data);

  const { userInfo } = data;

  console.log(userInfo);


  return (
    <div>
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
              name="nickname"
              label="用户昵称"
              component={TextField}
            />
            <Field
              fullWidth
              margin="normal"
              name="phone"
              label="手机号"
              type="tel"
              component={TextField}
            />
          </form>
        )}
      />
    </div>
  );
}

export default EditeUserInfo;
