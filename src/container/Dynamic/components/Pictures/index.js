import React, { useState } from 'react';
import LazyLoad from 'react-lazyload';
import Box from '@material-ui/core/Box';
import MultiView from './MultiView';
import Preview from './Preview';


function Pictures({ pictures }) {
  const [ show, setShow ] = useState(false);
  const [ index, setIndex ] = useState(0);
  if (!pictures || pictures.length === 0) return null;

  if (show) {
    return (
      <MultiView
        index={index}
        pictures={pictures}
        setIndex={(idx) => {
          setIndex(idx);
        }}
        onClose={() => {
          setShow(false);
        }}
      />
    );
  }


  return (


    <LazyLoad
      debounce={100}
      // unmountIfInvisible
      placeholder={<Box width={1} pt={'100%'} bgcolor="#f8f8f8" borderRadius={4} />}
    >
      <Preview
        pictures={pictures}
        onShow={(idx) => {
          setShow(true);
          setIndex(idx);
        }}
      />

    </LazyLoad>
  );
}

export default Pictures;
