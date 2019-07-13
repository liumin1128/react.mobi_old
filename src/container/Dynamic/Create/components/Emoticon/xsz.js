const list = new Array(24)
.fill('x')
.map((_, idx) => ({
  name: `[emoji_xsz:${(idx < 10 ? ('0'+idx) : idx)}]`,
  url: 'https://imgs.react.mobi/emoticon/xsz/'+(idx < 10 ? ('0'+idx) : idx)+'.gif'
}));

export default {
  name: '小贱哈',
  id: 'xsz',
  cover: 'https://imgs.react.mobi/emoticon/xsz/00.gif',
  list
};
