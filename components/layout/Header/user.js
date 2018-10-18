import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import Avatar from '@material-ui/core/Avatar';
import { USERINFO } from '@/graphql/schema/user';

export default class user extends PureComponent {
  render() {
    return (
      <Query query={USERINFO}>
        {({ loading, error, data = {}, refetch }) => {
          const { userInfo = {} } = data;
          if (loading) return 'Loading...';
          if (error) return 'error';
          console.log(data);
          return (
            <div>
              <Avatar src={userInfo.avatarUrl} />
            </div>
          );
        }}
      </Query>
    );
  }
}
