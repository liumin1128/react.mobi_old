import React, { Fragment, PureComponent, createRef } from 'react';
import { Editor, EditorState, RichUtils, convertFromRaw } from 'draft-js';
import InlineStyleControls from './controls/InlineStyleControls';
import MediaControls from './controls/MediaControls';
import BlockStyleControls from './controls/BlockStyleControls';
import decorators from './decorators';
import options from './options';
import Affix from '../Affix';
import './index.less';

export default class DraftEditor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      editorState: props.initialValue
        ? EditorState.set(EditorState.createWithContent(convertFromRaw(props.initialValue)), { decorator: decorators })
        : EditorState.createEmpty(decorators),
    };
    this.editor = createRef();
  }

  onChange = (editorState) => {
    const { _onChange } = this.props;
    this.setState({ editorState });
    if (_onChange) _onChange(editorState);
  };

  handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  renderMenus = () => {
    const { editorState } = this.state;
    return (
      <Affix offsetTop={64}>
        <div className="RichEditor-menus">
          <BlockStyleControls editorState={editorState} onChange={this.onChange} />
          <InlineStyleControls editorState={editorState} onChange={this.onChange} />
          <MediaControls editorState={editorState} onChange={this.onChange} />
        </div>
      </Affix>
    );
  }

  renderEditor = () => {
    const { editorState } = this.state;
    const { placeholder = '输入文本...', ...props } = this.props;
    let className = 'RichEditor-editor draft-view-content';
    const contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }
    return (
      <div className="RichEditor-root">
        <div className={className}>
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            placeholder={placeholder}
            handleKeyCommand={this.handleKeyCommand}
            {...options}
            {...props}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderMenus()}
        {this.renderEditor()}
      </Fragment>
    );
  }
}
