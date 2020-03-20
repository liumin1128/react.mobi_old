import React, { useState, useRef } from 'react';
import Toolbar from './Toolbar';
import Marsk from './Marsk';
import NavBottom from './NavBottom';
import RotatableImage from './RotatableImage';

function Pictures({ index, pictures, onClose, setIndex }) {
  const [ rotate, setRotate ] = useState(0);
  const [ isRotated, setIsRotated ] = useState(false);
  const img = useRef();

  function handleRotate(reg) {
    if (!img || !img.current || !img.current.width || !img.current.height) return;
    setIsRotated(true);
    setRotate((rotate + reg) % 360);
  }

  function handlePrev(e) {
    e.preventDefault();
    if (!index || index < 1) return;
    setIndex(index - 1);
  }

  function handleNext(e) {
    e.preventDefault();
    setIndex((index + 1) % pictures.length);
  }

  return (
    <>

      {pictures.length > 1 && (
        <NavBottom
          list={pictures}
          current={index}
          onChange={(idx) => {
            setIsRotated(false);
            setRotate(0);
            setIndex(idx);
          }}
        />
      )}

      <Toolbar
        onClose={() => {
          onClose();
        }}
        onView={() => {
          window.open(pictures[index], '_blank');
        }}
        onRouteRight={() => {
          handleRotate(90);
        }}
        onRouteLeft={() => {
          handleRotate(-90);
        }}
      />


      <Marsk
        current={index}
        length={pictures.length}
        onNext={handleNext}
        onPrev={handlePrev}
      >
        <RotatableImage
          img={img}
          src={pictures[index]}
          isRotated={isRotated}
          rotate={rotate}
          onClick={() => { onClose(); }}
        />
      </Marsk>

    </>
  );
}

export default Pictures;
