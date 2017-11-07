import List from './list';
import { request, toast, Router } from '../../utils';

class Say extends List {
  create = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      await request('say/create', payload);
      await dispatch({ type: 'say/init' });
      await toast('发布成功');
      await Router.push('/');
      if (cb) await cb();
    } catch (error) {
      toast('好像哪里出错了');
      console.log(error);
    }
  }
}

export default new Say({ name: 'say' });

