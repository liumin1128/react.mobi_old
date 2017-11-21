import React, { PureComponent } from 'react';

export default class extends PureComponent {
  render() {
    const {
      type, value, style, placeholder, ...other
    } = this.props;


    return (<div className="box">
      {
        type === 'textarea'
        ? <textarea
          {...other}
          value={value}
          placeholder={!value ? placeholder : ''}
          ref={(c) => { this.input = c; }}
          type={type}
          style={style}
          cols="20"
          rows="5"
          className="input textarea"
        />
        : <input
          {...other}
          ref={(c) => { this.input = c; }}
          value={value}
          placeholder={!value ? placeholder : ''}
          style={style}
          type={type}
          className="input"
        />
      }

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
          line-height: 40px;
          width: 100%;
          border: 0;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, .1);
          margin-bottom: 16px;
        }
        .textarea {
          height: auto;
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
