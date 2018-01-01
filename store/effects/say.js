import List from './list';
import { request, toast, Router } from '../../utils';

class Say extends List {
  create = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      console.log('xxxxxxxxxxxxiiiiiii');
      const { status } = await request('/say/create', payload);
      if (status === 200) {
        await dispatch({ type: 'say/init' });
        await toast('发布成功');
        await Router.push('/');
        if (cb) await cb();
      } else if (status === 401) {
        toast.error('您还没登录哦');
      } else {
        toast.error(status);
      }
    } catch (error) {
      toast('好像哪里出错了');
      console.log('error say create');
      console.log(error);
    }
  }
}

export default new Say({ name: 'say' });

