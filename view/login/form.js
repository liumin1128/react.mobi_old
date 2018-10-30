import React, { PureComponent } from 'react';
import { Form, Field } from 'react-final-form';
import Button from '@material-ui/core/Button';
import TextField from '@/components/Form/TextField';

const formKeys = [
  {
    key: 'username',
    label: '用户名',
  },
  {
    key: 'password',
    label: '密码',
    type: 'password',
  },
];

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = '用户名不可以不填';
  }
  if (!values.password) {
    errors.password = '密码不可以不填';
  }
  return errors;
};

export default class form extends PureComponent {
  onSubmit = (values) => {
    const { onSubmit } = this.props;
    if (onSubmit) onSubmit(values);
  }

  render() {
    return (
      <Form
        onSubmit={this.onSubmit}
        // initialValues={formData}
        // values={formData}
        validate={validate}
        render={({ handleSubmit, reset, submitting, pristine, change, values }) => (
          <form id="createArticleForm" onSubmit={handleSubmit}>
            {
              formKeys.map(i => (
                <Field
                  key={i.key}
                  name={i.key}
                  label={i.label}
                  component={TextField}
                  type="text"
                  margin="normal"
                  fullWidth
                  // value={formData[i.key]}
                  {...i.props}
                />
              ))
            }
            <br />
            <br />

            <Button
              variant="contained"
              // size="small"
              color="primary"
              type="submit"
              style={{ marginRight: 16 }}
            >
                登录
            </Button>
            <Button
              // variant="contained"
              size="small"
              color="primary"
              onClick={() => { window.location.href = 'https://api.react.mobi/oauth/github'; }}
            >
                Github
            </Button>
            <Button
              // variant="contained"
              size="small"
              color="primary"
              onClick={() => { window.location.href = 'https://api.react.mobi/oauth/wechat'; }}
            >
              wechat
            </Button>
          </form>
        )}
      />
    );
  }
}
