import React, { useState, useRef, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Editor, EditorState } from 'draft-js';
import { state2json, state2html } from './utils';


function MyEditor() {
  const [ editorState, setEditorState ] = useState(
    EditorState.createEmpty(),
  );

  const editor = useRef();

  function focusEditor() {
    editor.current.focus();
  }

  useEffect(() => {
    focusEditor();
  }, []);

  function onChange(state) {
    setEditorState(state);
  }


  return (
    <Box onClick={focusEditor} bgcolor="#ddd" p={4}>
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={onChange}
      />
      <Button
        onClick={() => {
          console.log(state2json(editorState));
        }}
      >
        state2json
      </Button>
      <Button
        onClick={() => {
          console.log(state2html(editorState));
        }}
      >
        state2html
      </Button>
    </Box>
  );
}

export default MyEditor;
