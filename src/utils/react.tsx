import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
  destory: () => void
}

export function domRender<T>(Component: React.ComponentClass<Omit<T, 'destory'> & Props>) {
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
