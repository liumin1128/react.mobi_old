function getList(num, id) {
  return new Array(22)
  .fill('x')
  .map((_, idx) => ({
    name: `[emoji_b2d:${(idx < 10 ? ('0'+idx) : idx)}]`,
    url: 'https://imgs.react.mobi/emoticon/b2d/'+(idx < 10 ? ('0'+idx) : idx)+'.gif',
  }));
}

export default [
  {
    name: '小贱哈',
    id: 'xjh',
    cover: 'https://imgs.react.mobi/emoticon/xjh/00.gif',
    list: getList(24, 'xjh')
  },
  {
    name: '不二呆',
    id: 'b2d',
    cover: 'https://imgs.react.mobi/emoticon/b2d/00.gif',
    list: getList(22, 'b2d')
  },
  {
    name: '小狮子',
    id: 'xsz',
    cover: 'https://imgs.react.mobi/emoticon/xsz/00.gif',
    list: getList(16, 'xsz')
  },
]