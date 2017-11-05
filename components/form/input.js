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
        width: 100%;
        border: 1px rgba(0,0,0,0.05) solid;
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
