import React, { Fragment } from 'react';
import { RichUtils } from 'draft-js';
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import Looks5Icon from '@material-ui/icons/Looks5';
import Looks6Icon from '@material-ui/icons/Looks6';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import CodeBulletedIcon from '@material-ui/icons/Code';

import StyleButton from './StyleButton';

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one', icon: LooksOneIcon },
  { label: 'H2', style: 'header-two', icon: LooksTwoIcon },
  { label: 'H3', style: 'header-three', icon: Looks3Icon },
  { label: 'H4', style: 'header-four', icon: Looks4Icon },
  { label: 'H5', style: 'header-five', icon: Looks5Icon },
  { label: 'H6', style: 'header-six', icon: Looks6Icon },
  { label: 'Blockquote', style: 'blockquote', icon: FormatQuoteIcon },
  { label: 'UL', style: 'unordered-list-item', icon: FormatListBulletedIcon },
  { label: 'OL', style: 'ordered-list-item', icon: FormatListNumberedIcon },
  { label: 'Code Block', style: 'code-block', icon: CodeBulletedIcon },
  // { label: 'MyCustomBlock', style: 'MyCustomBlock', icon: LooksOneIcon },
];

export default ({ editorState, onChange }) => {
  const selection = editorState.getSelection();

  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  const onToggle = newblockType => onChange(RichUtils.toggleBlockType(
    editorState,
    newblockType,
  ));


  return (
    <Fragment>
      {BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.label}
          icon={type.icon}
          active={type.style === blockType}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </Fragment>
  );
};
