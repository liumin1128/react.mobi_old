import React, { useState } from 'react';
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
import Popper from '@/components/Popper';
import useStyles from './styles';

const validate = (values) => {
  const errors = {};
  if (!values.content) {
    errors.content = '内容不可以为空';
  }
  return errors;
};

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

function CreateCommentForm({ onSubmit, initialValues = {}, status }) {
  const classes = useStyles();
  const { content, pictures: _pictures = [] } = initialValues;
  const [ pictures, setPictures ] = useState(_pictures);
  function onUpPictureSuccess(data) {
    setPictures([ ...pictures, ...data ]);
  }
  function onDeletePictures(idx) {
    pictures.splice(idx, 1);
    setPictures([ ...pictures ]);
  }
  return (
    <Form
      onSubmit={({ content: val }) => { onSubmit({ content: val, pictures }); }}
      validate={validate}
      initialValues={{ content }}
      render={({ handleSubmit, errors }) => (
        <form id="createArticleForm" onSubmit={handleSubmit}>
          <Field
            autoFocus
            multiline
            rows="3"
            key="content"
            name="content"
            // label="输入评论"
            component={TextField}
            type="text"
            // margin="normal"
            variant="outlined"
            fullWidth
            placeholder="畅所欲言，有你更精彩"
            autoComplete="off"
            rowsMax="8"
          />

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
                    <BootstrapInput></BootstrapInput>
                  </Box>
                )}
              >
                <Icon>#</Icon>
              </Popper>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              disabled={status === 'loading' || !isEmpty(errors)}
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


        </form>
      )}
    />
  );
}

export default CreateCommentForm;
