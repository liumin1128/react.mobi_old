import React from 'react';

export default ({
  children,
  loading,
  type = 'default',
  style,
  disabled,
  onClick,
  block,
}) => (
  <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={`
        button
        ${type}
        ${block ? 'block' : ''}
        ${loading || disabled ? 'disabled' : ''}
        ${loading ? 'loading' : ''}
      `}
    style={{ ...style }}
  >
    {children}
    <style jsx>{`
      .button {
        border: none;
        background: red;
        font-size: 16px;
        padding: 7px 16px;
        cursor: pointer;
        filter:chroma(color=#000000);
        outline：none;
        height: 36px;

        white-space: nowrap;
        text-overflow:ellipsis;
        // overflow:hidden;
      }
      .button:focus{
        outline:0;
      }
      .default {
        background: rgba(0,0,0,0.05);
        color: #333;
      }
      .primary {
        background: #4893ff;
        color: #fff;
      }
      .disabled {
        cursor: not-allowed
        opacity: 0.6;
      }
      .loading {
        cursor: not-allowed
        opacity: 0.7;
      }
      .block {
        display: block;
        width: 100%;
      }
    `}</style>
  </button>
);

