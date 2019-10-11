export default [
  {
    key: 'cover',
    label: '文章封面',
    required: true,
  },
  {
    key: 'title',
    label: '文章标题',
    required: true,
  },
  {
    key: 'description',
    label: '描述',
    required: true,
    multiline: true,
    rows: 3,
  },
  {
    key: 'type',
    label: '分类',
    required: true,
  },
  {
    key: 'tags',
    label: '标签',
    required: true,
  },
  {
    key: 'allowComment',
    label: '是否允许评论',
  },
  {
    key: 'needComment',
    label: '是否设置回复可见',
  },
  {
    key: 'dynamic',
    label: '同时转发到动态',
  },
  {
    key: 'time1',
    label: '定时发布',
  },
];
