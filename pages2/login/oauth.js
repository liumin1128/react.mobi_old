import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import { setStorage, removeStorage, getStorage } from '@/utils/store';
import { PATH_BEFORELOGIN, USER_TOKEN } from '@/config/base';
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
      await setStorage(USER_TOKEN, token);
      router.push(path);
    }
  }

  render() {
    return (
      <div />
    );
  }
}
