import React, { PureComponent } from 'react';

export default class extends PureComponent {
  render() {
    const { children, ...set } = this.props;
    return (<select
      {...set}
      ref={(c) => { this.select = c; }}
      className="select"
    >
      {children}
      <style jsx>{`
        .select {
          box-sizing: border-box;
          padding: 0 10px;
          font-size: 14px;
          display: block;
          width: 100%;
          height: 40px;
          border: 1px rgba(0,0,0,0.05) solid;
          margin-bottom: 16px;
          background: #fff;
        }
        .error {
          font-size: 12px;
          color: red;
        }
      `}
      </style>
    </select>
    );
  }
}
