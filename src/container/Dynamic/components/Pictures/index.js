import React, { useState } from 'react';
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
    <Preview
      pictures={pictures}
      onShow={(idx) => {
        setShow(true);
        setIndex(idx);
      }}
    />
  );
}

export default Pictures;
