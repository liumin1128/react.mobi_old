import React from 'react';
import ReactDOM from 'react-dom';

export const domRender = (Component) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  function destory() {
    const unmountResult = ReactDOM.findDOMNode(div);
    if (unmountResult && div.parentNode) {
      // console.log(div);
      div.parentNode.removeChild(div);
    }
  }
  ReactDOM.render(<Component destory={destory} />, div);
};
