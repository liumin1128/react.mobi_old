import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Wrapper from '@/components/Upload/Wrapper';
import ButtonBase from '@material-ui/core/ButtonBase';
import CardMedia from '@material-ui/core/CardMedia';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import PhotoIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  add: {
    border: `1px ${theme.palette.primary.main} dashed`,
  },
  item: {
    position: 'relative',
    borderRadius: theme.spacing(0.5),
    overflow: 'hidden',
    '&:hover': {
      '& > .pictures-close-btn': {
        display: 'block',
      },
    },
  },
  picture: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    // borderRadius: theme.spacing(0.5),
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    margin: 4,
  },
  close: {
    display: 'none',
    position: 'absolute',
    top: theme.spacing(0.5),
    right: theme.spacing(0.5),
    background: 'rgba(0,0,0,0.5)',
    width: theme.spacing(3),
    height: theme.spacing(3),
    '& > svg': {
      width: '100%',
      height: '100%',
      color: '#fff',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}));

export default ({ onChange, value = [], width, max = 9 }) => {
  const classes = useStyles();
  const pictures = value || [];

  function onUpPictureSuccess(data) {
    let temp = [ ...pictures, ...data ];
    if (temp.length > max) {
      temp = temp.splice(0, max);
      alert(`最多只能上传${max}张`);
    }
    onChange(temp);
  }

  function onDeletePictures(idx) {
    pictures.splice(idx, 1);
    onChange([ ...pictures ]);
  }

  return (
    <Box>
      <Box mt={1} />
      <Box display="flex" m={-0.5} flexWrap="wrap">
        {Array.isArray(pictures) && pictures.length < max ? (
          <Wrapper onChange={onUpPictureSuccess} multiple>
            <Box className={classes.item}>
              <ButtonBase
                className={`${classes.picture} ${classes.add}`}
                style={{
                  width,
                  height: width,
                }}
              >
                <PhotoIcon
                  style={{ color: '#ddd', width: '33%', height: '33%' }}
                />
              </ButtonBase>
            </Box>
          </Wrapper>
        ) : (
          <Box className={classes.item}>
            <ButtonBase
              className={`${classes.picture} ${classes.add}`}
              style={{
                width,
                height: width,
              }}
              disabled
            >
              <PhotoIcon
                style={{ color: '#ddd', width: '33%', height: '33%' }}
              />
            </ButtonBase>
          </Box>
        )}
        {Array.isArray(pictures)
          && pictures.map((i, idx) => (
            <Box key={i} className={classes.item}>
              <CardMedia
                className={classes.picture}
                image={i}
                style={{
                  width,
                  height: width,
                }}
              />
              <ButtonBase
                className={`${classes.close} pictures-close-btn`}
                onClick={() => {
                  onDeletePictures(idx);
                }}
              >
                <CloseIcon />
              </ButtonBase>
            </Box>
          ))}
      </Box>
    </Box>
  );
};
