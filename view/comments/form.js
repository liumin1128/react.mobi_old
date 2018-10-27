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
    const { onSubmit, classes } = this.props;
    return (
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, change, values }) => (
          <form
            id="createArticleForm"
            onSubmit={(e) => {
              handleSubmit(e);
              reset();
            }}
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
