import React, { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import PhotoIcon from '@material-ui/icons/Photo';
import { Form, Field } from 'react-final-form';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@/components/Form/TextField';
import Button from '@/components/Button/Loading';
import UpPicture from '@/components/Upload/Wrapper';
import useStyles from './styles';

const validate = (values) => {
  const errors = {};
  if (!values.content) {
    errors.content = '内容不可以为空';
  }
  return errors;
};

function CreateCommentForm({ onSubmit, status }) {
  const classes = useStyles();

  const [ pictures, setPictures ] = useState([
    'https://imgs.react.mobi/FugLdcExrep8XP8b9UGklaZS3_Xf',
    'https://imgs.react.mobi/FhSW2PlU3vcJg3s4rn8Ah6LOPZhh',
    'https://imgs.react.mobi/FppdySI-horw1rk81FCt2hHU_e8E',
    'https://imgs.react.mobi/FgXlzlzCZjWodl1-7VyTWQ89Lqek',
  ]);

  function onUpPictureSuccess(data) {
    setPictures(data);
  }

  console.log('pictures');
  console.log(pictures);

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
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
              <IconButton aria-label="Delete">
                <PhotoIcon />
              </IconButton>
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
            {pictures.map(i => <CardMedia key={i} className={classes.picture} image={i} />)}
          </Box>
        </form>
      )}
    />
  );
}

export default CreateCommentForm;
