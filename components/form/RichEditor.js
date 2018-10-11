import React, { PureComponent, createRef } from 'react';
import DraftEditor from '@/components/DraftEditor';
import { getJSON, getHTML } from '@/components/DraftEditor/utils';

export default class RichEditor extends PureComponent {
  editor = createRef()

  getJSON = () => {
    const { editorState } = this.editor.state;
    return getJSON(editorState);
  }

  getHTML = () => {
    const { editorState } = this.editor.state;
    return getHTML(editorState);
  }

  render() {
    // const { input: { onChange } } = this.props;
    return (
      <DraftEditor
        ref={(c) => { this.editor = c; }}
        // _onChange={(editorState) => {
        //   console.log(this.editor.state);
        //   onChange({
        //     json: JSON.stringify(getJSON(editorState)),
        //     html: getHTML(editorState),
        //   });
        // }}
      />
    );
  }
}
