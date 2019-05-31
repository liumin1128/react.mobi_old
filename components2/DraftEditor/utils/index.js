import { AtomicBlockUtils, EditorState, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';

export function insertAtomicBlock(editorState, type, ima, data) {
  const contentState = editorState.getCurrentContent();
  const contentStateWithEntity = contentState.createEntity(type, ima, data);
  const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });

  return AtomicBlockUtils.insertAtomicBlock(
    newEditorState,
    entityKey,
    ' ',
  );
}

export function getJSON(editorState) {
  return convertToRaw(editorState.getCurrentContent());
}

export function getHTML(editorState) {
  return stateToHTML(editorState.getCurrentContent(), {
  });
}
