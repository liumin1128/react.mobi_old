import React, { Fragment } from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './styles';

function PicturesMarsk({ onNext, onPrev, current, length, children }) {
  const classes = useStyles();
  return (
    <Fragment>
      <Box className={classes.root}>
        {children}
        {current > 0 && (
        <Box
          className={`${classes.marsk} ${classes.left}`}
          onClick={onPrev}
        />
        )}

        {current < length - 1 && (
        <Box
          className={`${classes.marsk} ${classes.right}`}
          onClick={onNext}
        />
        )}
      </Box>
    </Fragment>
  );
}

export default PicturesMarsk;
