const list = new Array(24)
.fill('x')
.map((_, idx) => ({
  name: `[emoji_xjh:${(idx < 10 ? ('0'+idx) : idx)}]`,
  url: 'https://imgs.react.mobi/emoticon/xjh/'+(idx < 10 ? ('0'+idx) : idx)+'.gif'
}));

export default {
  name: '小贱哈',
  id: 'xjh',
  cover: 'https://imgs.react.mobi/emoticon/xjh/00.gif',
  list
};
