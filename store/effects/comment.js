import List from './list';
import { request, toast, Router } from '../../utils';

class Comment extends List {
  create = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const { id } = payload;
      if (!id) toast.error('没有评论对象？？？');
      const { status } = await request('comment/create', payload);
      if (status === 200) {
        await dispatch({ type: 'comment/init', query: { id } });
        await toast('评论成功');
        if (cb) await cb();
      } else if (status === 401) {
        toast.error('您还没登录哦');
      } else {
        toast.error(status);
      }
    } catch (error) {
      toast('好像哪里出错了');
      console.log('error comment create');
      console.log(error);
    }
  }
}

export default new Comment({ name: 'comment' });

