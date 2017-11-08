import React from 'react';

export default ({
  color = 'rgba(0, 0, 0, 0.05)',
  size = 1,
  width = 2,
}) => (<div>
  <div className="loader" />
  <style jsx>{`
    .loader,
    .loader:after {
      border-radius: 50%;
      width: ${size}rem;
      height: ${size}rem;
    }
    .loader {
      font-size: 10px;
      position: relative;
      text-indent: -9999em;
      border-top: .${width}em solid ${color};
      border-right: .${width}em solid ${color};
      border-bottom: .${width}em solid ${color};
      border-left: .${width}em solid #409EFF;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      -webkit-animation: load8 1.1s infinite linear;
      animation: load8 1.1s infinite linear;
    }
    @-webkit-keyframes load8 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes load8 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  `}</style>
</div>);
