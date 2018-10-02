import React, { PureComponent } from 'react';
import NoSsr from '@material-ui/core/NoSsr';

import DraftEditor from '@/components/DraftEditor';

export default class ArticleCreate extends PureComponent {
  render() {
    return (
      <div style={{ background: '#fff' }}>
        <NoSsr>
          <DraftEditor />
        </NoSsr>
      </div>
    );
  }
}
