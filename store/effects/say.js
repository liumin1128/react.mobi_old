import Router from 'next/router';
import List from './list';
import { request, snackbar } from '../../utils';

class Say extends List {
  create = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const { status } = await request('/say/create', payload);
      if (status === 200) {
        await dispatch({ type: 'say/init' });
        await snackbar.success('发布成功');
        await Router.push('/');
        if (cb) await cb();
      } else if (status === 401) {
        snackbar.error('您还没登录哦');
      } else {
        snackbar.error(status);
      }
    } catch (error) {
      snackbar.error('好像哪里出错了');
      console.log('error say create');
      console.log(error);
    }
  }
}

export default new Say({ name: 'say' });

