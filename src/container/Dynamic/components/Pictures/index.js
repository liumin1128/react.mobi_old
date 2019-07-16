import React from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './styles';

function Pictures({ pictures }) {
  const classes = useStyles();
  if (!pictures || pictures.length === 0) return null;
  if (pictures.length === 1) {
    return (
      <CardMedia
        className={classes.pictureone}
        image={pictures[0]}
      />
    );
  }
  return (
    <Box
      m={-0.25}
      mt={1}
      mb={1}
      display="flex"
      flexWrap="wrap"
      className={classes.pictures}
    >
      {pictures.map(i => (
        <CardMedia
          key={i}
          className={classes.picture}
          image={i}
        />
      ))}
    </Box>
  );
}

export default Pictures;
