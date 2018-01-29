import dynamic from 'next/dynamic';
import Router from 'next/router';
import { request, setStorage, getStorage, removeStorage } from '../../utils';
import Snackbar from '../../components/snackbar';
import modal from '../../components/hoc/modal';
// import Login from '../../container/login/index';

const Login = dynamic(
  import('../../container/login'),
  {
    ssr: false,
    // loading: () => (<div>
    //   <CircularProgress size={20} />
    // </div>),
  },
);

class User {
  login = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const {
        status, message, token, userInfo,
      } = await request('user/login', payload);
      if (status === 200) {
        Snackbar.success(`${userInfo.nickname} 死鬼，你咋才来！`);
        await setStorage('reactmobitoken', token);
        await dispatch({ type: 'user/save', payload: { userInfo } });
        if (cb) {
          await cb();
        } else {
          await Router.push('/');
        }
      } else {
        Snackbar.success(message);
      }
    } catch (error) {
      console.log('登录错误');
      console.log(error);
    }
  }
  logout = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      await removeStorage('reactmobitoken');
      await dispatch({ type: 'user/save', payload: { userInfo: {} } });
    } catch (error) {
      console.log(error);
    }
  }
  register = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const {
        status, message, token, userInfo,
      } = await request('user/register', payload);
      if (status === 200) {
        Snackbar.success(message);
        await setStorage('reactmobitoken', token);
        await dispatch({ type: 'user/save', payload: { userInfo } });
        if (cb) {
          await cb();
        } else {
          await Router.push('/');
        }
      } else {
        Snackbar.error(message);
      }
    } catch (error) {
      console.log('注册失败');
      console.log(error);
      Snackbar.error(error.message);
    }
  }
  getUserInfo = async ({ payload }, { dispatch }) => {
    try {
      const token = await getStorage('reactmobitoken');
      if (token) {
        const { status, userInfo } = await request('user/getUserInfo');
        if (status === 200) {
          await dispatch({ type: 'user/save', payload: { userInfo } });
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  saveOauthToken = async ({ payload, cb }, { dispatch }) => {
    console.log(payload);
    await setStorage('reactmobitoken', payload.token);
    await dispatch({ type: 'user/getUserInfo' });
  }
  checkAuth = async ({ payload, cb }, { dispatch }) => {
    const token = getStorage('reactmobitoken');
    if (!token) {
      if (cb) await cb();
      modal(Login);
      return false;
    } else {
      return true;
    }
  }
}

export default new User({ name: 'user' });
