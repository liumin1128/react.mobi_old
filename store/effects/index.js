import say from './say';
import article from './article';
import user from './user';
import comment from './comment';
import common from './common';

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
  'comment/refresh': comment.refresh,
  'comment/detail': comment.detail,
  'comment/more': comment.more,
  'comment/create': comment.create,
  'comment/thumb': comment.thumb,
  'comment/delete': comment.delete,
  // 用户
  'user/login': user.login,
  'user/logout': user.logout,
  'user/register': user.register,
  'user/getUserInfo': user.getUserInfo,
  'user/checkAuth': user.checkAuth,
  'common/getQiniuToken': common.getQiniuToken,
  'common/sentSmsCode': common.sentSmsCode,
};
