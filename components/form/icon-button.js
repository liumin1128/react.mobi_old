import React from 'react';
import Ripples from 'react-ripples';

export default ({
  during = 3000,
  rippleColor = 'rgba(0, 0, 0, .3)',
  src,
  style,
}) => (
  <Ripples
    during={during}
    style={{
      width: 30,
      height: 30,
      padding: 10,
      borderRadius: 100,
    ...style,
  }}
    color={rippleColor}
  >
    <img
      style={{
        width: '100%',
        height: '100%',
      }}
      src={src}
      alt=""
    />
  </Ripples>


);

