import React from 'react';

export default ({ src, size = 100 }) => (<div>
  <img src={src} alt="" />
  <style jsx>{`
    width: ${size}px;
    height: ${size}px;
    border-radius: 1000px;
    background: rgba(0,0,0,0.1);
  `}</style>
</div>);
