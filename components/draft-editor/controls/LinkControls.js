import React, { Fragment, Component } from 'react';
import { Entity, RichUtils } from 'draft-js';
import LinkIcon from '@material-ui/icons/Link';
import StyleButton from './StyleButton';

export default class MediaButton extends Component {
  createLink = () => {
    const url = prompt('请输入url:', 'https://');
    if (!url) return;
    // const url = 'https://react.mobi';
    const { editorState, onChange } = this.props;
    const entityKey = Entity.create('LINK', 'MUTABLE', { url });
    onChange(RichUtils.toggleLink(
      editorState,
      editorState.getSelection(),
      entityKey,
    ));
  }
  removeLink() {
    const { editorState, onChange } = this.props;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      onChange(RichUtils.toggleLink(editorState, selection, null));
    }
  }
  promptForLink() {
    const { editorState } = this.props;
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      this.createLink();
    }
  }
  render() {
    const { editorState, onChange, classes } = this.props;
    return (
      <StyleButton
        key={'link'}
        icon={LinkIcon}
        // active={currentStyle.has(type.style)}
        label={'link'}
        onToggle={() => {
          this.promptForLink();
        }}
        // style={type.style}
      />
    );
  }
}

