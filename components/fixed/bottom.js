import React from 'react';

export default ({ children }) => (<div className="comment-bottom">
  {children}
  <style jsx>{`
    .comment-bottom {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #fff;
      box-shadow: 0 0 3px rgba(0,0,0,0.1);
    }
  `}</style>
</div>);
