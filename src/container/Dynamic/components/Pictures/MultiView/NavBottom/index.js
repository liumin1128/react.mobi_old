import React from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './styles';

function PicturesMarsk({ list, current, onChange }) {
  const classes = useStyles();
  return (
    <Box
      m={-0.25}
      mt={0.25}
      display="flex"
      flexWrap="wrap"
      className={classes.root}
    >
      {list.map((i, idx) => (
        <CardMedia
          key={i}
          className={`${classes.item} ${current === idx ? classes.current : ''}`}
          image={i}
          onClick={() => {
            onChange(idx);
          }}
        />
      ))}
    </Box>
  );
}

export default PicturesMarsk;
