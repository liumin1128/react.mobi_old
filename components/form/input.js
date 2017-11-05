import React, { PureComponent } from 'react';

export default class extends PureComponent {
  render() {
    return (<div className="box">
      <input
        {...this.props}
        ref={(c) => { this.input = c; }}
        className="input"
      />
      <style jsx>{`
        .box {
          width: 100%;
        }
        .input {
          box-sizing: border-box;
          padding: 10px;
          font-size: 14px;
          display: block;
          height: 40px;
          line-heiht: 40px;
          width: 100%;
          border: 0;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, .1);
          margin-bottom: 16px;
        }
        .error {
          font-size: 12px;
          color: red;
        }
      `}
      </style>
    </div>);
  }
}
