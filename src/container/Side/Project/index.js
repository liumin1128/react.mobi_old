import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@/components/Link';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Typography variant="subtitle2" gutterBottom>
          开发者相关
        </Typography>
        <Typography variant="body2" gutterBottom>
          <Link href="/about/progress">进度与开发计划</Link>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <Link href="/about/develop">开源项目整理</Link>
        </Typography>
        <Typography variant="body2" gutterBottom>
          <Link href="/about/download">客户端下载</Link>
        </Typography>
      </div>
    );
  }
}
