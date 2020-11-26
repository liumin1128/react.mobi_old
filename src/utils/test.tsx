import { extend } from 'lodash'
import React from 'react'

// type HOC<T, U> = <Props>(
//     Component: React.ComponentType<Props & InjectProps>
//   ) => React.ComponentType<T & U>

export function hoc<T extends Record<string, unknown>, U>(
  Component: React.ComponentType<T>,
  injectProps: U
): (props: T) => React.ReactElement<T & U> {
  return function (props: T): React.ReactElement<T & U> {
    return <Component {...props} {...injectProps} />
  }
}
class Test extends React.Component {
  render() {
    return <div>111</div>
  }
}
interface SSProps {
  color: string
}

const SS: React.ComponentType<SSProps> = ({ color }: SSProps) => <div>{color}</div>

interface InjectProps {
  size: string
  height: number
}

const SSWithColor = hoc<SSProps, InjectProps>(SS, {})
const SSWithColor2 = hoc<SSProps, InjectProps>(Test, { color: 'red' })

console.log(<SSWithColor color='red' />)
