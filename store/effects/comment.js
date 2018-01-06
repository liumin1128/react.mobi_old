import List from './list';
import { request, snackbar } from '../../utils';

class Comment extends List {
  create = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      console.log('payload');
      console.log(payload);
      const { id, content, replyTo } = payload;
      if (!id) {
        return snackbar.error('没有评论对象？？？');
      }
      const api = replyTo ? 'comment/reply' : 'comment/create';

      const { status } = await request(api, { id, content, replyTo });

      if (status === 200) {
        await dispatch({ type: 'comment/init', query: { id } });
        // await snackbar('评论成功');
        if (cb) await cb();
      } else if (status === 401) {
        snackbar.error('您还没登录哦');
      } else {
        snackbar.error(status);
      }
    } catch (error) {
      snackbar('好像哪里出错了');
      console.log('error comment create');
      console.log(error);
    }
  }
  thumb = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const { id, _id } = payload;
      if (!id) snackbar.error('没有点赞对象？？？');
      const { status, message } = await request('comment/thumb', { id: _id });

      if (status === 200) {
        await dispatch({ type: 'comment/init', query: { id } });
        await snackbar(message);
        if (cb) await cb();
      } else if (status === 401) {
        snackbar.error('您还没登录哦');
      } else {
        snackbar.error(status);
      }
    } catch (error) {
      snackbar('好像哪里出错了');
      console.log('error comment create');
      console.log(error);
    }
  }
  delete = async ({ payload, cb }, { getState, dispatch }) => {
    try {
      const { id, _id } = payload;
      if (!id) snackbar.error('没有点赞对象？？？');
      const { status, message } = await request('comment/delete', { id: _id });
      if (status === 200) {
        await dispatch({ type: 'comment/init', query: { id } });
        await snackbar(message);
        if (cb) await cb();
      } else if (status === 401) {
        snackbar.error('您还没登录哦');
      } else {
        snackbar.error(status);
      }
    } catch (error) {
      snackbar('好像哪里出错了');
      console.log('error comment create');
      console.log(error);
    }
  }
}

export default new Comment({ name: 'comment' });

