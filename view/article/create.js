import React, { PureComponent } from 'react';
import DraftEditor from '@/components/DraftEditor';

export default class ArticleCreate extends PureComponent {
  render() {
    return (
      <div>
        <DraftEditor />
      </div>
    );
  }
}
