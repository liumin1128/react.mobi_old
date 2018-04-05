import React from 'react';
import { Editor } from 'slate-react';
import { Value } from 'slate';
import initialValue from './value.json';
import renderNode from './renderNode';
import renderMark from './renderMark';
import plugins from './plugins';
import Alignment from './plugins/alignment';
import Mark from './plugins/mark';

const DEFAULT_NODE = 'paragraph';

export default class RichTextExample extends React.Component {
  state = {
    value: Value.fromJSON(initialValue),
  }
  onChange = ({ value }) => {
    this.setState({ value });
  }
  render() {
    const { placeholder = 'Enter some text...' } = this.props;
    return (
      <div>
        <Mark
          onChange={this.onChange}
          value={this.state.value}
        />
        <Alignment
          onChange={this.onChange}
          value={this.state.value}
        />
        <Editor
          // schema={schema}
          // className={styles.slateEditorContent}
          value={this.state.value}
          onChange={this.onChange}
          plugins={plugins}
          // // onPaste={this.onPaste}
          renderNode={renderNode}
          renderMark={renderMark}
          placeholder={placeholder}
        />
      </div>
    );
  }
}
