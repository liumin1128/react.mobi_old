import React from 'react';
import Ripples from 'react-ripples';

export default ({
  children,
  loading,
  type = 'default',
  style,
  disabled,
  onClick,
  block,
  during = 600,
  rippleColor = 'rgba(0, 0, 0, .3)',
}) => (
  <Ripples
    during={during}
    style={{
    height: 40,
    boxShadow: '0px 1px 1px rgba(0, 0, 0, .1)',
    margin: 0,
    ...style,
  }}
    color={rippleColor}
  >
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
        height: 40px;
        white-space: nowrap;
        text-overflow:ellipsis;
        margin: 0;
        overflow:hidden;
      }
      .button:focus{
        outline:0;
      }
      .default {
        background: rgba(0,0,0,0.05);
        color: #333;
      }
      .primary {
        background: #409EFF;
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
  </Ripples>


);

