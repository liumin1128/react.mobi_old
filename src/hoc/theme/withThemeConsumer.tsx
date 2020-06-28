import React from 'react'
import { Theme } from '@material-ui/core/styles'
import { ThemeContext } from './index'

interface Props {
  theme: Theme | undefined
}

// // theme的hoc用法
function withThemeConsumer<P extends object, S extends object>(
  C: React.ComponentType<P> | React.ComponentClass<P, S>
) {
  return class Component extends React.PureComponent<P & Props, S> {
    render() {
      return (
        <ThemeContext.Consumer>
          {({ theme }) => <C {...this.props} theme={theme} />}
        </ThemeContext.Consumer>
      )
    }
  }
}

export default withThemeConsumer
