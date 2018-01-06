import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form';
import Input from '../../components/input';
import Button from '../../components/button';

const styles = () => ({
  root: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    '@media (max-width: 768px)': {
      padding: '16px 16px 16px 72px',
    },
  },
  textarea: {
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    width: 150,
    marginTop: 16,
    marginBottom: 16,
  },
});

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'content',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = '不能为空';
    }
  });
  return errors;
};

const renderField = (field) => {
  const {
    input, label, meta: { touched, error, dirty }, ...other
  } = field;
  return (<Input {...input} {...other} />);
};


export default ({
  key, payload = {}, placeholder = '', autoFocus,
}) => {
  @connect(({ form: fromReducer }) => ({ formValues: fromReducer[key] }))
  @withStyles(styles)
  @reduxForm({ form: key, validate })
  class C extends PureComponent {
    onFocus = () => {
      const { dispatch } = this.props;
      dispatch({
        type: 'user/checkAuth',
        cb: () => {
          this.textareaRef.blur();
        },
      });
    }
    onSubmit = (values) => {
      const { dispatch, reset } = this.props;
      dispatch({
        type: 'comment/create',
        payload: { payload, ...values },
        cb: reset,
      });
    }
    render() {
      const {
        classes, handleSubmit, formValues = {},
      } = this.props;
      return (
        <section>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div className={classes.root}>
              <Field
                name="content"
                autoFocus={autoFocus}
                placeholder={placeholder}
                component={renderField}
                className={classes.textarea}
                multiline
                inputRef={(c) => { this.textareaRef = c; }}
                rows={4}
                type="text"
                onFocus={this.onFocus}
              />
              <Button
                disabled={formValues.syncErrors}
                type="submit"
                className={classes.button}
              >发送</Button>
            </div>
          </form>
        </section>
      );
    }
  }
  return C;
};
