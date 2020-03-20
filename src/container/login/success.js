import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { setStorage, removeStorage, getStorage } from '@/utils/store';
import { PATH_BEFORELOGIN, USER_TOKEN } from '@/config/base';
// import nossr from '@/hoc/nossr';
import Image from './images/undraw_people_tax5.svg';
@withRouter
// @nossr
export default class oauth extends PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.getToken();
    }, 100);
  }

  getToken = async () => {
    const { router } = this.props;
    const { token } = router.query;
    // console.log('token');
    // console.log(token);
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
      <>
        <Box display="flex" justifyContent="center" flexDirection="column" alignItems="center">
          <Box maxWidth={300} maxHeight={300} my={4}>
            <Image style={{ width: '100%', height: '100%' }} />
          </Box>
          <Typography align="center" variant="h6">登录成功</Typography>
          <Typography align="center" variant="body2">正在转跳...</Typography>
        </Box>
      </>
    );
  }
}
