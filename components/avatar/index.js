import React from 'react';

export default ({ src, nickname = '?', size = 100 }) => (<div className="avatar" >
  {src ? <img className="avatar" src={src} alt="" /> : <span className="nickname">{nickname[0]}</span>}
  <style jsx>{`
    .avatar {
      width: ${size}px;
      height: ${size}px;
      border-radius: 100%;
      background: rgba(0,0,0,0.05);
      border: none;
    }
    .nickname {
      width: 100%;
      height: 100%;
      display: block;
      text-align: center;
      line-height: ${size}px;
      font-width: bold;
      font-size: ${size / 2}px;
      color: rgba(255,0,0,.3);
    }
  `}</style>
</div>);
