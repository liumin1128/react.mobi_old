import TextField from '@/components/Form/TextField';
import Picture from '@/components/Form/Upload/Picture';
import pp from '@/hoc/pp';

export default [
  {
    key: 'cover',
    label: '文章封面',
    required: true,
    component: pp(Picture, { style: { width: 16 * 15, height: 9 * 15 } }),
  },
  {
    key: 'title',
    label: '文章标题',
    required: true,
    component: TextField,
  },
  {
    key: 'description',
    label: '描述',
    required: true,
    multiline: true,
    rows: 3,
    component: TextField,
    variant: 'outlined',
  },
  {
    key: 'type',
    label: '分类',
    required: true,
    component: TextField,
  },
  {
    key: 'tags',
    label: '标签',
    required: true,
    component: TextField,
  },
  {
    key: 'allowComment',
    label: '是否允许评论',
    component: TextField,
  },
  {
    key: 'needComment',
    label: '是否设置回复可见',
    component: TextField,
  },
  {
    key: 'dynamic',
    label: '同时转发到动态',
    component: TextField,
  },
  {
    key: 'time1',
    label: '定时发布',
    component: TextField,
  },
];
