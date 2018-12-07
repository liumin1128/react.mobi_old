import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@/components/Link';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Typography style={{ color: '#999' }} variant="body2" gutterBottom>
          盗火©2018 -
          {' '}
          <Link target="_blank" href="http://www.miitbeian.gov.cn">吉ICP备15006191号-2</Link>
        </Typography>
      </div>
    );
  }
}
