import { toast } from 'react-toastify';
import request from '../../utils/request';

class User {
  login = async ({ payload }, { getState, dispatch }) => {
    try {
      const { status, message, ...others } = await request('user/login', payload);
      if (status === 200) {
        toast.success('登录成功');
        await dispatch({ type: 'user/save', payload: others });
        await dispatch({ type: 'common/save', payload: { loginModalVisible: false } });
      } else {
        toast.error(message);
      }
      // await dispatch({ type: 'user/init' });
    } catch (error) {
      console.log('登录错误');
      console.log(error);
      toast.error('用户名或密码错误');
    }
    // await Router.push('/');
  }
  register = async ({ payload }, { getState, dispatch }) => {
    try {
      const { status, message, ...others } = await request('user/register', payload);
      if (status === 200) {
        toast.success('注册成功');
        await dispatch({ type: 'user/save', payload: others });
        await dispatch({ type: 'common/save', payload: { registerModalVisible: false } });
      } else {
        toast.error(message);
      }
    } catch (error) {
      console.log('注册失败');
      console.log(error);
      toast.error(error.message);
    }
  }
}

export default new User({ name: 'user' });
