import React from 'react'

type HOC<InjectProps> = <Props>(
  Component: React.ComponentType<Props & InjectProps>
) => React.ComponentType<Props>

const pp: HOC = (Component, p) => props => <Component {...props} {...p} />

export default pp
