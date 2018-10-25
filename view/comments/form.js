import React, { PureComponent } from 'react';
import { Form, Field } from 'react-final-form';
// import Button from '@material-ui/core/Button';
import TextField from '@/components/Form/TextField';
import { withStyles } from '@material-ui/core/styles';
// import Grow from '@material-ui/core/Grow';

const validate = (values) => {
  const errors = {};
  if (!values.content) {
    errors.content = '评论内容不可以为空';
  }
  return errors;
};

const styles = theme => ({
  root: {
    position: 'relative',
  },
  btn: {
    position: 'absolute',
  },
});

@withStyles(styles)
export default class Create extends PureComponent {
  render() {
    const { onSubmit, classes } = this.props;
    return (
      <div className={classes.root}>
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
                label="评论内容"
                component={TextField}
                type="text"
                margin="normal"
                variant="outlined"
                fullWidth
                placeholder="畅所欲言，回车发送"
                autoComplete="off"
              />
              {
              //   <Grow in={!pristine}>
              //   <Button
              //     variant="contained"
              //     size="large"
              //     color="primary"
              //     type="submit"
              //     className={classes.btn}
              //   >
              // 登录
              //   </Button>
              // </Grow>
            }
            </form>
          )}
        />
      </div>

    );
  }
}
