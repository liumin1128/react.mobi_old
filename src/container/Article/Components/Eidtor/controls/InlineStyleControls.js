import React from 'react';
import { RichUtils } from 'draft-js';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import CodeIcon from '@material-ui/icons/SettingsEthernet';
import StyleButton from './StyleButton';

const INLINE_STYLES = [
  { label: 'Bold', style: 'BOLD', icon: FormatBoldIcon },
  { label: 'Italic', style: 'ITALIC', icon: FormatItalicIcon },
  { label: 'Underline', style: 'UNDERLINE', icon: FormatUnderlinedIcon },
  { label: 'Monospace', style: 'CODE', icon: CodeIcon },
];

export default ({ editorState, onChange }) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  const onToggle = (inlineStyle) => onChange(RichUtils.toggleInlineStyle(
    editorState,
    inlineStyle,
  ));

  return (
    <>
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={type.label}
          icon={type.icon}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </>
  );
};
