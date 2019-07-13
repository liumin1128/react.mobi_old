
import React, { Fragment, useState, useRef } from 'react';
import Box from '@material-ui/core/Box';
import Icon from '@material-ui/core/Icon';
import { useOnMount } from '@/hooks';
import Popper from '@/components/Popper';
import SelectTopic from '../SelectTopic';
import Emoticon from '../Emoticon';
import useStyles from './styles';

function Topics({ onClick, content }) {
  const classes = useStyles();
  const input = useRef();
  const [ selection, setSelection ] = useState();
  function getCursor(self) {
    console.log('self');
    console.log(self);
    const sel = window.getSelection();
    console.log('sel');
    console.log(sel);
    if (sel) setSelection(sel);
  }
  useOnMount(() => {
    document.addEventListener('selectionchange', () => {
      getCursor(self);
    });
  });
  return (
    <Fragment>
      {JSON.stringify(selection, 0, false)}
      <div
        contentEditable
        suppressContentEditableWarning
        id="feedback_mix_text"
        className={classes.input}
        ref={input}
      >
        {content}
      </div>
      <Popper
        content={(
          <Box p={1}>
            <Emoticon
              onClick={(topic) => {

              }}
            />
          </Box>
                )}
      >
        <Icon>@</Icon>
      </Popper>
    </Fragment>
  );
}

export default Topics;
