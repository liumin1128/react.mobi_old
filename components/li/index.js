import React from 'react';

export default ({ label, value, icon }) => (<div className="li">
  <div className="lable">{label}</div>
  <div className="value">{value}</div>
  <style jsx>{`
    .li {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px rgba(0,0,0,0.1) solid;
      padding: 10px;
    }
    .lable {

    }
    .value {
      color: rgba(0,0,0,0.6);
      font-size: 0.9em;
    }
  `}</style>
</div>);
