import React, { PureComponent } from 'react';
import { Form, Field } from 'react-final-form';
import TextField from '@/components/Form/TextField';

const validate = (values) => {
  const errors = {};
  if (!values.content) {
    errors.content = '评论内容不可以为空';
  }
  return errors;
};

export default class Create extends PureComponent {
  render() {
    const { onSubmit } = this.props;
    return (
      <Form
        onSubmit={(values, form) => {
          onSubmit(values);
          form.reset();
        }}
        validate={validate}
        render={({ handleSubmit }) => (
          <form
            id="createArticleForm"
            onSubmit={handleSubmit}
          >
            <Field
              key="content"
              name="content"
              label="输入评论"
              component={TextField}
              type="text"
              margin="normal"
              variant="outlined"
              fullWidth
              placeholder="畅所欲言，回车发送"
              autoComplete="off"
            />
          </form>
        )}
      />
    );
  }
}
