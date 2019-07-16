import React, { useState, Fragment } from 'react';
import Box from '@material-ui/core/Box';
import Big from './Big';
import Small from './Small';
import useStyles from './styles';

function Pictures({ pictures }) {
  const [ show, setShow ] = useState(false);
  const [ index, setIndex ] = useState(0);
  const classes = useStyles();
  if (!pictures || pictures.length === 0) return null;

  return (
    <Fragment>
      <Box className={classes.root}>

        {show ? (
          <Big
            index={index}
            pictures={pictures}
            setIndex={(idx) => {
              setIndex(idx);
            }}
            onClose={() => {
              setShow(false);
            }}
          />
        ) : (
          <Small
            pictures={pictures}
            onShow={(idx) => {
              setShow(true);
              setIndex(idx);
            }}
          />
        )}
      </Box>

    </Fragment>
  );
}

export default Pictures;
