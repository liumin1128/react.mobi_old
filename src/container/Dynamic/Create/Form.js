import React, { Fragment, useState, useRef } from 'react';
import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import isEmpty from 'lodash/isEmpty';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import InputBase from '@material-ui/core/InputBase';
import CloseIcon from '@material-ui/icons/Close';
import Icon from '@material-ui/core/Icon';
import CardMedia from '@material-ui/core/CardMedia';
import PhotoIcon from '@material-ui/icons/Photo';
import { Form, Field } from 'react-final-form';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@/components/Form/TextField';
import Button from '@/components/Button/Loading';
import UpPicture from '@/components/Upload/Wrapper';
import { useOnMount } from '@/hooks';
import useStyles from './styles';
import Popper from '@/components/Popper';
import SelectTopic from './components/SelectTopic';
import Emoticon from './components/Emoticon';
// import Editor from './components/Editor';

const validate = (values) => {
  const errors = {};
  if (!values.content) {
    errors.content = '内容不可以为空';
  }
  return errors;
};

function CreateCommentForm({ onSubmit, initialValues = {}, status }) {
  const { content: _content, pictures: _pictures = [] } = initialValues;
  const classes = useStyles();
  const input = useRef();
  const [ content, setContent ] = useState(_content);
  const [ pictures, setPictures ] = useState(_pictures);
  const [ selection, setSelection ] = useState();

  useOnMount(() => {
    document.addEventListener('selectionchange', () => {
      getCursor(self);
    });
  });

  function getCursor(self) {
    const sel = window.getSelection();
    if (sel) setSelection(sel);
  }
  function onUpPictureSuccess(data) {
    setPictures([ ...pictures, ...data ]);
  }
  function onDeletePictures(idx) {
    pictures.splice(idx, 1);
    setPictures([ ...pictures ]);
  }
  return (
    <Fragment>
      <div
        contentEditable
        suppressContentEditableWarning
        id="feedback_mix_text"
        className={classes.input}
        ref={input}
      >
        {content}
      </div>
      <Box mt={1} display="flex" justifyContent="space-between" alignItems="flex-start">
        <Box>
          <UpPicture multiple onChange={onUpPictureSuccess}>
            <IconButton aria-label="Photo">
              <PhotoIcon />
            </IconButton>
          </UpPicture>
          <Popper
            content={(
              <Box p={1}>
                <SelectTopic
                  onClick={(topic) => {
                    console.log('topic');
                    console.log(topic);
                    input.focus();
                  }}
                />
              </Box>
            )}
          >
            <Icon>#</Icon>
          </Popper>

          <Popper
            content={(
              <Box p={1}>
                <Emoticon
                  onClick={(topic) => {
                    setContent(content + topic.name);
                    input.current.focus();
                    // selection.collapse();
                    // selection.selectAllChildren(input.current);// range 选择obj下所有子内容
                    // selection.collapseToEnd();// 光标移至最后
                  }}
                />
              </Box>
                )}
          >
            <Icon>@</Icon>
          </Popper>
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.submit}
          // disabled={status === 'loading' || !isEmpty(errors)}
          loading={status === 'loading'}
        >
          发布
        </Button>
      </Box>

      <Box mt={1} />
      <Box display="flex" m={-0.5}>
        {pictures.map((i, idx) => (
          <Box key={i} className={classes.item}>
            <CardMedia className={classes.picture} image={i} />
            <ButtonBase className={`${classes.close} pictures-close-btn`} onClick={() => { onDeletePictures(idx); }}>
              <CloseIcon />
            </ButtonBase>
          </Box>
        ))}
      </Box>
    </Fragment>


  );
}

export default CreateCommentForm;
