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

export function state2json(editorState) {
  if (!editorState || typeof editorState.getCurrentContent !== 'function') return;
  return convertToRaw(editorState.getCurrentContent());
}

export function state2html(editorState) {
  if (!editorState || typeof editorState.getCurrentContent !== 'function') return;
  return stateToHTML(editorState.getCurrentContent(), {
  });
}
