import React from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './styles';

function Pictures({ pictures, onShow }) {
  const classes = useStyles();

  function wiewPicture(idx) {
    onShow(idx);
  }

  if (pictures.length === 1) {
    return (
      <CardMedia
        className={classes.pictureone}
        image={pictures[0]}
        onClick={() => {
          wiewPicture(0);
        }}
      />
    );
  }

  return (
    <Box
      m={-0.25}
      display="flex"
      flexWrap="wrap"
      className={classes.pictures}
    >
      {pictures.map((i, idx) => (
        <CardMedia
          key={i}
          className={classes.picture}
          image={i}
          onClick={() => {
            wiewPicture(idx);
          }}
        />
      ))}
    </Box>
  );
}

export default Pictures;
