import React from 'react';

export default ({
  icon, size = 30, color = '#333', style, src,
}) => (
  <div
    style={{
      width: size,
      height: size,
      overflow: 'hidden',
      position: 'relative',
      margin: 'auto',
      ...style,
    }}
  >
    <img
      src={src || `http://img.react.mobi/icon/${icon}.svg`}
      alt=""
      style={{
        position: 'absolute',
        left: '-100%',
        width: size,
        height: size,
        borderRight: '20px solid transparent',
        filter: `drop-shadow(${color} ${size}px 0px)`,
      }}
    />
  </div>);
