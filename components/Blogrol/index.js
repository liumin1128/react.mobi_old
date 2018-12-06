import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '../Link';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Typography variant="subtitle2" gutterBottom>
          友情链接
        </Typography>
        <Typography variant="body2" gutterBottom>
          <Link target="_blank" href="https://www.xiaoduyu.com">小度鱼 - xiaoduyu.com</Link>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <Link target="_blank" href="https://liumin.me">本王今年八岁的博客 - liumin.me</Link>
        </Typography>
      </div>
    );
  }
}
