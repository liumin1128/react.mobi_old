import say from './say';
import article from './article';
import user from './user';
import comment from './comment';

export default {
  // 文章
  'article/init': article.init,
  'article/detail': article.detail,
  'article/more': article.more,
  // 说说
  'say/init': say.init,
  'say/detail': say.detail,
  'say/more': say.more,
  'say/create': say.create,
  // 评论
  'comment/init': comment.init,
  'comment/detail': comment.detail,
  'comment/more': comment.more,
  'comment/create': comment.create,
  'comment/thumb': comment.thumb,
  'comment/delete': comment.delete,
  // 用户
  'user/login': user.login,
  'user/register': user.register,
  'user/getUserInfo': user.getUserInfo,
  'user/requireAuth': user.requireAuth,
};
