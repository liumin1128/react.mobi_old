import React, { PureComponent, Fragment } from 'react';
import Link from 'next/link';

import { Query, graphql } from 'react-apollo';
import dynamic from 'next/dynamic';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { USERINFO, USER_LOGIN } from '@/graphql/schema/user';

const DynamicComponentWithCustomLoading = dynamic(() => import('@/view/login/modal'), {
  loading: () => <p>...</p>,
});


@graphql(USER_LOGIN)
export default class user extends PureComponent {
  state = {
    showLoginModal: false,
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

  toogleModal = () => {
    this.setState(({ showLoginModal }) => ({ showLoginModal: !showLoginModal }));
  }

  renderLoginForm() {
    return (
      <DynamicComponentWithCustomLoading onClose={this.toogleModal} />
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
