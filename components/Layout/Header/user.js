import React, { PureComponent, Fragment } from 'react';
import Link from 'next/link';
import { Query, graphql } from 'react-apollo';
import dynamic from 'next/dynamic';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { USERINFO, USER_LOGIN } from '@/graphql/schema/user';

const DynamicComponentWithCustomLoading = dynamic(() => import('@/view/login/modal'), {
  loading: () => null,
});


@graphql(USER_LOGIN)
export default class user extends PureComponent {
  state = {
    showLoginModal: false,
  }

  refetch = () => {}

  onLoginSuccess = () => {
    this.setState({ showLoginModal: false });
    this.refetch();
  }

  toogleModal = () => {
    this.setState(({ showLoginModal }) => ({ showLoginModal: !showLoginModal }));
  }

  renderLoginForm() {
    return (
      <DynamicComponentWithCustomLoading
        onLoginSuccess={this.onLoginSuccess}
        onClose={this.toogleModal}
      />
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
                <Link href="/login/register"><Button color="inherit">注册</Button></Link>
                <Button
                  color="inherit"
                  style={{ background: 'rgba(255,255,255,0.1)' }}
                  onClick={this.toogleModal}
                >
                  登录
                </Button>
              </Fragment>
            );
          }
          const { userInfo = {} } = data;
          return (
            <Avatar src={userInfo.avatarUrl} />
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
