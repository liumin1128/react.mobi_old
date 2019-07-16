import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './styles';

function Pictures({ index, pictures, onClose, setIndex }) {
  const classes = useStyles();
  return (
    <Fragment>
      <CardMedia
        className={classes.picturebig}
        image={pictures[index]}
        onClick={() => {
          onClose();
        }}
      />
      {pictures.length > 1 && (
      <Box
        m={-0.25}
        mt={1}
        mb={1}
        display="flex"
        flexWrap="wrap"
        className={classes.bigpictures}
      >
        {pictures.map((i, idx) => (
          <CardMedia
            key={i}
            className={classes.bigpicture}
            image={i}
            onClick={() => {
              setIndex(idx);
            }}
          />
        ))}
      </Box>
      )}
    </Fragment>
  );
}

export default Pictures;
