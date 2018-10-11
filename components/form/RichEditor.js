import React, { PureComponent } from 'react';
import DraftEditor from '@/components/DraftEditor';
import { getJSON } from '@/components/DraftEditor/utils';

export default class RichEditor extends PureComponent {
  render() {
    const { input: { onChange } } = this.props;
    return (
      <DraftEditor
        _onChange={(editorState) => {
          onChange(JSON.stringify(getJSON(editorState)));
        }}
      />
    );
  }
}
