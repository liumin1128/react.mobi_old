// @flow weak

import React from 'react';
import Waypoint from 'react-waypoint';

export default ({ isEnd, onEnter, onLeave }) => (<div className="flex">
  {
    isEnd ?
      <p className="label">没有更多啦</p> :
      <Waypoint
        onEnter={onEnter}
        onLeave={onLeave}
      >
        <div />
      </Waypoint>
  }
  <style jsx>{`
    .flex {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border-top: 1px #eee dashed;
      margin-bottom: 100px;
    }
    .label {
      margin-left: 10px;
      color: #ccc;
      font-size: 12px;
    }
  `}</style>
</div>);
