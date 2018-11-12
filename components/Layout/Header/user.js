import React, { PureComponent, Fragment } from 'react';
import { Query, graphql } from 'react-apollo';
import dynamic from 'next/dynamic';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { USERINFO, USER_LOGIN } from '@/graphql/schema/user';

const DynamicComponentWithCustomLoading = dynamic(() => import('@/view/login/modal'), {
  loading: () => <p>...</p>,
});

const styles = theme => ({
  paper: {
    maxWidth: 360,
  },
});

@withStyles(styles)
@graphql(USER_LOGIN)
export default class user extends PureComponent {
  state = {
    showLoginModal: true,
  }

  // onSubmit = async (values, close) => {
  //   try {
  //     const { mutate } = this.props;
  //     const { data: { result: data } } = await mutate({
  //       variables: values,
  //       // refetchQueries: ['userInfo'],
  //     });
  //     if (data.status === 200) {
  //       await setStorage(USER_TOKEN, data.token);
  //       await this.refetch();
  //       await close();
  //     }
  //   } catch (error) {
  //     console.log('error');
  //     console.log(error);
  //   }
  // }

  renderLoginForm() {
    return (
      <DynamicComponentWithCustomLoading />
    );
  }

  renderUser() {
    return (
      <Query query={USERINFO} errorPolicy="all">
        {({ loading, error, data = {}, refetch }) => {
          if (loading) return null;
          if (error) {
            this.refetch = refetch;
            return (
              <Fragment>
                <Button color="inherit" onClick={this.login}>注册</Button>
                <Button
                  // centerRipple
                  // focusRipple
                  // variant="extendedFab"
                  // color="primary"
                  color="inherit"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                  onClick={this.login}
                >
                  登录
                </Button>
              </Fragment>
            );
          }
          const { userInfo = {} } = data;
          return (
            <div>
              <Avatar src={userInfo.avatarUrl} />
            </div>
          );
        }}
      </Query>
    );
  }

  render() {
    const { showLoginModal } = this.state;
    return (
      <Fragment>
        {this.renderUser()}
        {showLoginModal && this.renderLoginForm()}
      </Fragment>
    );
  }
}
