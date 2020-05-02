import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { withThemeProvider, withThemeConsumer } from '@/hoc/theme'

export default function withRoot(App) {
  @withThemeProvider
  @withThemeConsumer
  class WithRoot extends React.Component {
    componentDidMount() {
      this.removeJssStyles()
    }

    removeJssStyles = () => {
      const jssStyles = document.querySelector('#jss-server-side')
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles)
      }
    }

    render() {
      const { theme, ...props } = this.props
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App {...props} />
        </ThemeProvider>
      )
    }
  }

  WithRoot.propTypes = {
    theme: PropTypes.string,
  }

  WithRoot.defaultProps = {
    theme: 'default',
  }

  return WithRoot
}
