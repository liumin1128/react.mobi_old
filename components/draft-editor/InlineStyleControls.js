import React, { Fragment } from 'react';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import CodeIcon from '@material-ui/icons/Code';
import StyleButton from './StyleButton';

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD', icon: FormatBoldIcon },
  { label: 'Italic', style: 'ITALIC', icon: FormatItalicIcon },
  { label: 'Underline', style: 'UNDERLINE', icon: FormatUnderlinedIcon },
  { label: 'Monospace', style: 'CODE', icon: CodeIcon },
];

export default (props) => {
  const currentStyle = props.editorState
    .getCurrentInlineStyle();

  return (
    <Fragment>
      {INLINE_STYLES.map(type =>
      (<StyleButton
        key={type.label}
        icon={type.icon}
        active={currentStyle.has(type.style)}
        label={type.label}
        onToggle={props.onToggle}
        style={type.style}
      />))}
    </Fragment>
  );
};
