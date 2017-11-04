
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Button from 'material-ui/Button';

import Input from './input';
import Textarea from './textarea';

const ContactForm = (props) => {
  const {
    handleSubmit, items, pristine, submitting,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      {
        items.map((i) => {
          switch (i.type) {
            case 'textarea':
            return (
              <div key={i.name}>
                <Field
                  name={i.name}
                  label={i.label}
                  component={Textarea}
                  type={i.type}
                />
              </div>
            );
            default:
              return (
                <div key={i.name}>
                  <Field
                    name={i.name}
                    label={i.label}
                    component={Input}
                    type={i.type}
                  />
                </div>
              );
          }
        })
      }
      <div className="action">
        <span />
        <Button raised color="primary" type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
      </div>
      <style jsx>{`
        .action {
          display: flex;
          justify-content: space-between;
        }
      `}
      </style>
    </form>
  );
};

export default ({ items, validate, warn }) => {
  const Form = reduxForm({
    form: 'say',
    validate,
    warn,
  })(ContactForm);
  return <Form items={items} />;
};
