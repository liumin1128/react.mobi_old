import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import { setStorage, removeStorage, getStorage } from '@/utils/store';
import { PATH_BEFORELOGIN, USER_TOKEN_KEY } from '@/config/base';
import nossr from '@/hoc/nossr';

@nossr
@withRouter
export default class oauth extends PureComponent {
  async componentDidMount() {
    const { router } = this.props;
    const { token } = router.query || {};
    if (token) {
      let path = await getStorage(PATH_BEFORELOGIN);
      if (path) {
        await removeStorage(PATH_BEFORELOGIN);
      } else {
        path = '/';
      }
      await setStorage(USER_TOKEN_KEY, token);
      router.push(path);
    }
  }

  render() {
    return (
      <div>
        登录成功
      </div>
    );
  }
}
