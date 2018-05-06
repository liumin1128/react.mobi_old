import React, { PureComponent, createRef } from 'react';
import Grid from 'material-ui/Grid';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import Head from 'next/head';
import InlineStyleControls from './controls/InlineStyleControls';
import BlockStyleControls from './controls/BlockStyleControls';
import MediaControls from './controls/MediaControls';
import LinkControls from './controls/LinkControls';
import options from './options';
import decorators from './decorators';


export default class MyEditor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty(decorators) };
    this.editor = createRef();
    this.focus = () => this.editor.focus();
    this.onChange = editorState => this.setState(
      { editorState },
      () => setTimeout(() => this.focus(), 0),
    );
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

        <div className="RichEditor-menus">
          <BlockStyleControls editorState={editorState} onChange={this.onChange} />
          <InlineStyleControls editorState={editorState} onChange={this.onChange} />
          <LinkControls editorState={editorState} onChange={this.onChange} />
          <MediaControls editorState={editorState} onChange={this.onChange} />
        </div>

        <div className={className}>
          <Editor
            {...options}
            editorState={editorState}
            onChange={this.onChange}
            ref={(c) => { this.editor = c; }}
            placeholder="输入文本..."
            spellCheck
          />
        </div>

        {
          // <Grid container spacing={24}>
          //   <Grid item md={4}>
          //     <div dangerouslySetInnerHTML={{ __html: this.getHtml() }} />
          //   </Grid>
          //   <Grid item md={4}>
          //     <pre>
          //       {JSON.stringify(this.getJson(), null, 2)}
          //     </pre>
          //   </Grid>
          //   <Grid item md={4}>
          //     <pre>
          //       {this.getHtml()}
          //     </pre>
          //   </Grid>
          // </Grid>
        }

      </div>
    );
  }
}
