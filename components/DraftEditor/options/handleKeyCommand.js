import { RichUtils } from 'draft-js';

export default function (command, editorState) {
  const newState = RichUtils.handleKeyCommand(editorState, command);
  if (newState) {
    this.onChange(newState);
    return true;
  }
  return false;
}
