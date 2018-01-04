import { request, setStorage, getStorage, Router } from '../../utils';
import Snackbar from '../../components/snackbar';

class User {
  login = async ({ payload }, { getState, dispatch }) => {
    try {
      const {
        status, message, token, userInfo,
      } = await request('user/login', payload);
      if (status === 200) {
        Snackbar.success();
        // toast.success(`${userInfo.nickname} 死鬼，你咋才回来！`);
        await setStorage('reactmobitoken', token);
        await dispatch({ type: 'user/save', payload: userInfo });
        await dispatch({ type: 'common/save', payload: { loginModalVisible: false } });
        await Router.push('/');
      } else {
        Snackbar.success({ message });
        // toast.error(message);
      }
      // await dispatch({ type: 'user/init' });
    } catch (error) {
      console.log('登录错误');
      console.log(error);
      // toast.error('用户名或密码错误');
    }
  }
  register = async ({ payload }, { getState, dispatch }) => {
    try {
      const {
        status, message, token, userInfo,
      } = await request('user/register', payload);
      if (status === 200) {
        // toast.success('注册成功');
        await setStorage('reactmobitoken', token);
        await dispatch({ type: 'user/save', payload: userInfo });
        await dispatch({ type: 'common/save', payload: { registerModalVisible: false } });
      } else {
        // toast.error(message);
      }
    } catch (error) {
      console.log('注册失败');
      console.log(error);
      // toast.error(error.message);
    }
  }
  getUserInfo = async ({ payload }, { dispatch }) => {
    try {
      const { status, userInfo } = await request('user/getUserInfo', payload);
      if (status === 200) {
        await dispatch({ type: 'user/save', payload: { userInfo } });
      }
      // console.log('status, userInfo');
      // console.log(status, userInfo);
    } catch (error) {
      console.log(error);
    }
  }
  requireAuth = async ({ payload }, { dispatch }) => {
    const token = getStorage('reactmobitoken');
    if (!token) {
      await dispatch({ type: 'common/save', payload: { loginModalVisible: true } });
      // Router.push('/user/login');
    }
  }
}

export default new User({ name: 'user' });
