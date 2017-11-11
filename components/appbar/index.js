import React from 'react';

export default ({ left, right, title = '' }) => (<div>
  <div className="appbar">
    <button>取消</button>
  </div>
  <style jsx>{`
    .appbar {
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 55px;
      box-shadow: 0 0 3px rgba(0,0,0,0.1);
    }
  `}</style>
</div>);
