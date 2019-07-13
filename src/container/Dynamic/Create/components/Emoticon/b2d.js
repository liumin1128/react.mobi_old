const list = new Array(24)
.fill('x')
.map((_, idx) => ({
  name: `[emoji_b2d:${(idx < 10 ? ('0'+idx) : idx)}]`,
  url: 'https://imgs.react.mobi/emoticon/b2d/'+(idx < 10 ? ('0'+idx) : idx)+'.gif',
}));

export default {
  name: '不二呆',
  id: 'b2d',
  cover: 'https://imgs.react.mobi/emoticon/b2d/00.gif',
  list
};
