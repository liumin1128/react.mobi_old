import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { Form, Field } from 'react-final-form';
import Card, { CardHeader, CardMedia, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from '../../components/form/textField';
import { USER_LOGIN } from '../../graphql/user';

export default class Login extends PureComponent {
  render() {
    return (
      <Mutation mutation={USER_LOGIN}>
        {({ userLogin, loading, error, data = {}, ...other }) => {
          console.log('other');
          console.log(other);
          console.log('userLogin');
          console.log(userLogin);
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          return (
            <CardContent>
              <Form
                onSubmit={(value) => {
                  console.log('value');
                  console.log(value);
                  userLogin({ variables: value });
                }}
                // initialValues={initialValue}
                // validate={this.validate}
                render={({ handleSubmit, reset, submitting, pristine, change, values }) => (
                  <form onSubmit={handleSubmit}>
                    <Field
                      name="username"
                      label="username"
                      type="text"
                      component={TextField}
                      margin="normal"
                      // placeholder="请输入关键字"
                    />
                    <br />
                    <Field
                      name="password"
                      label="password"
                      type="password"
                      component={TextField}
                      margin="normal"
                      // placeholder="请输入关键字"
                    />
                    <br />
                    <Button
                      // variant="raised"
                      color="primary"
                      type="submit"
                      size="large"
                      // loading={createLoading}
                      // disabled={submitting || pristine}
                    >LET`S GO</Button>
                  </form>
                )}
              />
            </CardContent>
          );
        }}
      </Mutation>);
  }
}
