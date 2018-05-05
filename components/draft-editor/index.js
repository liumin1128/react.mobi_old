import React, { PureComponent, createRef } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import Head from 'next/head';
import InlineStyleControls from './InlineStyleControls';
import BlockStyleControls from './BlockStyleControls';


export default class MyEditor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.editor = createRef();
    this.focus = () => this.editor.focus();
    this.onChange = editorState => this.setState({ editorState }, this.focus);
  }
  getHtml = () => {
    const { editorState } = this.state;
    const html = stateToHTML(editorState.getCurrentContent());
    return html;
  }
  getJson = () => {
    const { editorState } = this.state;
    const raw = convertToRaw(editorState.getCurrentContent());
    return raw;
  }
  toggleInlineStyle = (inlineStyle) => {
    this.onChange(RichUtils.toggleInlineStyle(
      this.state.editorState,
      inlineStyle,
    ));
  }
  toggleBlockType = (blockType) => {
    this.onChange(RichUtils.toggleBlockType(
      this.state.editorState,
      blockType,
    ));
  }
  blockStyleFn = (block) => {
    switch (block.getType()) {
      case 'blockquote': return 'RichEditor-blockquote';
      default: return null;
    }
  };
  customStyleMap = {
    CODE: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
      fontSize: 16,
      padding: 2,
    },
  };
  render() {
    if (!global.window) {
      return (<Head>
        <link href="/static/draft-editor.css" rel="stylesheet" />
      </Head>);
    }
    const { editorState } = this.state;
    let className = 'RichEditor-editor';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }
    return (
      <div className="RichEditor-root">
        <Head>
          <link href="/static/draft-editor.css" rel="stylesheet" />
        </Head>
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className={className} onClick={this.focus}>
          <Editor
            editorState={editorState}
            blockStyleFn={this.blockStyleFn}
            customStyleMap={this.customStyleMap}
            onChange={this.onChange}
            ref={(c) => { this.editor = c; }}
            placeholder="输入文本..."
            spellCheck
          />
        </div>

        {
          <pre>
            {JSON.stringify(this.getJson(), null, 2)}
          </pre>
        }
        {
          <pre>
            {this.getHtml()}
          </pre>
        }
      </div>
    );
  }
}
