import React, { PureComponent } from 'react';
import { Mutation } from 'react-apollo';
import { USER_LOGIN } from '../../graphql/user';

export default class Login extends PureComponent {
  render() {
    return (
      <Mutation mutation={USER_LOGIN}>
        {({ userLogin, loading, error, data = {}, fetchMore }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;

          return (
            <div>
              666
            </div>);
          }}
      </Mutation>);
  }
}
