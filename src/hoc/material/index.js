import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function withRoot(App) {
  class WithRoot extends React.Component {
    componentDidMount() {
      this.removeJssStyles();
    }

    removeJssStyles = () => {
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    render() {
      const { theme, ...props } = this.props;
      return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App {...props} />
        </ThemeProvider>
      );
    }
  }

  return WithRoot;
}
