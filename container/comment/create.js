import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import { Field, reduxForm } from 'redux-form';
import Input from '../../components/input';
import Button from '../../components/button';

const styles = () => ({
  root: {
    padding: '0px 0px 0px 60px',
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

@connect(({ form }) => ({ formValues: form.comment }))
@withStyles(styles)
@reduxForm({ form: 'comment', validate })
export default class extends PureComponent {
  submit = (values) => {
    const { dispatch, id } = this.props;
    dispatch({ type: 'comment/create', payload: { id, ...values } });
  }
  render() {
    const {
      classes, handleSubmit, formValues = {},
    } = this.props;
    return (
      <section>
        <form onSubmit={handleSubmit(this.submit)}>
          <div className={classes.root}>
            <Field
              name="content"
              placeholder="畅所欲言"
              component={renderField}
              className={classes.textarea}
              multiline
              rows={4}
              type="text"
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
