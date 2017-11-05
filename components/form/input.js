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
        padding: 8px;
        font-size: 16px;
        display: block;
        width: 100%;
        border: 1px rgba(0,0,0,0.05) solid;
        margin-bottom: 8px;
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
