import React, { PureComponent } from 'react';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
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
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, change, values }) => (
          <form id="createArticleForm" onSubmit={handleSubmit}>
            <Field
              key="content"
              name="content"
              label="评论内容"
              component={TextField}
              type="text"
              margin="normal"
              variant="outlined"
              fullWidth
              placeholder="畅所欲言"
              autoComplete="off"
            />
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
            >
            登录
            </Button>
          </form>
        )}
      />
    );
  }
}
