import List from './list';
import { request, toast, Router } from '../../utils';

class Comment extends List {
  create = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      console.log('payload');
      console.log(payload);
      const { id, content, replyTo } = payload;
      if (!id) {
        return toast.error('没有评论对象？？？');
      }
      const api = replyTo ? 'comment/reply' : 'comment/create';

      const params = { id: replyTo || id, content };

      const { status } = await request(api, params);

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
  thumb = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const { id, _id } = payload;
      if (!id) toast.error('没有点赞对象？？？');
      const { status, message } = await request('comment/thumb', { id: _id });

      if (status === 200) {
        await dispatch({ type: 'comment/init', query: { id } });
        await toast(message);
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
  delete = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const { id, _id } = payload;
      if (!id) toast.error('没有点赞对象？？？');
      const { status, message } = await request('comment/delete', { id: _id });
      if (status === 200) {
        await dispatch({ type: 'comment/init', query: { id } });
        await toast(message);
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

