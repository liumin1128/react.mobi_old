import React from 'react'
import ReactDOM from 'react-dom'

export const domRender = (Component: React.ComponentType<{ destory: () => void }>) => {
  const element = document.createElement('div')
  document.body.appendChild(element)
  function destory() {
    const unmountResult = ReactDOM.findDOMNode(element) // eslint-disable-line
    if (unmountResult && element.parentNode) {
      element.parentNode.removeChild(element)
    }
  }
  ReactDOM.render(<Component destory={() => destory()} />, element)
}

// // @ts-ignore
