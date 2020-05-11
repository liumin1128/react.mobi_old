import React, { PureComponent } from 'react'

export default (WrappedComponent: React.ComponentType | React.ElementType, props: object) =>
  class extends PureComponent {
    render() {
      return <WrappedComponent {...this.props} {...props} />
    }
  }
