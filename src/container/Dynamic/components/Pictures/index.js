import React, { useState, Fragment } from 'react';
import Big from './Big';
import Small from './Small';
// import useStyles from './styles';

function Pictures({ pictures }) {
  const [ show, setShow ] = useState(false);
  const [ index, setIndex ] = useState(0);

  if (!pictures || pictures.length === 0) return null;

  return (
    <Fragment>
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
    </Fragment>
  );
}

export default Pictures;
