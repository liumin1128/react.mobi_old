import React, { PureComponent } from 'react';
import DraftEditor from '@/components/DraftEditor';
import { getJSON } from '@/components/DraftEditor/utils';

export default class RichEditor extends PureComponent {
  render() {
    const { input: { onChange } } = this.props;
    return (
      <DraftEditor
        onInput={(editorState) => {
          // console.log(getJSON(editorState));
          onChange(getJSON(editorState));
        }}
      />
    );
  }
}
