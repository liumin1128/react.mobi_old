import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@/components/Link';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Typography style={{ color: '#999' }} variant="body2" gutterBottom>
          <Link href="mailto:970568830@qq.com">联系我们</Link>
          {' - '}
          <a
            onClick={() => {
              alert('如有疑问，请联系QQ：97056883，或微信：qq970568830');
            }}
            style={{ textDecoration: 'none', color: '#999' }}
            href="#"
          >
            投诉建议
          </a>
        </Typography>
        <Typography style={{ color: '#999' }} variant="body2" gutterBottom>
          盗火 -
          {' '}
          <Link target="_blank" href="http://www.miitbeian.gov.cn">吉ICP备15006191号-2</Link>
        </Typography>
      </div>
    );
  }
}
