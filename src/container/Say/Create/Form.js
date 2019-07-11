import React from 'react';
import isEmpty from 'lodash/isEmpty';
import Box from '@material-ui/core/Box';
import { Form, Field } from 'react-final-form';
import TextField from '@/components/Form/TextField';
import Button from '@/components/Button/Loading';
import useStyles from './styles';

const validate = (values) => {
  const errors = {};
  if (!values.content) {
    errors.content = '内容不可以为空';
  }
  return errors;
};

function CreateCommentForm({ onSubmit, status, autoFocus }) {
  const classes = useStyles();
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, errors }) => (
        <form id="createArticleForm" onSubmit={handleSubmit}>
          <Field
            autoFocus
            // multiline
            // rows="2"
            key="content"
            name="content"
            // label="输入评论"
            component={TextField}
            type="text"
            // margin="normal"
            variant="outlined"
            fullWidth
            placeholder="畅所欲言，有你更精彩"
            autoComplete="off"
            // rowsMax="8"
          />
          <Box mt={1} display="flex" justifyContent="space-between" alignItems="flex-start">
            <Button size="small">添加表情</Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={status === 'loading' || !isEmpty(errors)}
              loading={status === 'loading'}
            >
              发布
            </Button>
          </Box>
        </form>
      )}
    />
  );
}

export default CreateCommentForm;
