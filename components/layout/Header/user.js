import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import { USERINFO } from '@/graphql/schema/user';

export default class user extends PureComponent {
  render() {
    return (
      <Query query={USERINFO}>
        {({ loading, error, data = {}, refetch }) => {
          const { detail = {} } = data;
          if (loading) return 'Loading...';
          console.log(error);

          if (error) return 'error';
          console.log(error);
          return (
            <div>
              999
            </div>
          );
        }}
      </Query>
    );
  }
}
