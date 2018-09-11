import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from './getPageContext';
// import { isServerSide } from '@/utils/common';

function withRoot(App) {
  class WithRoot extends React.Component {
    pageContext = null;

    constructor(props, context) {
      super(props, context);
      this.pageContext = this.props.pageContext || getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }


    render() {
      return (
        <JssProvider registry={this.pageContext.sheetsRegistry} generateClassName={this.pageContext.generateClassName}>
          <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
            <CssBaseline />
            <App {...this.props} pageContext={this.pageContext} />
          </MuiThemeProvider>
        </JssProvider>
      );
    }
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.object,
  };

  WithRoot.getInitialProps = (ctx) => {
    if (App.getInitialProps) {
      return App.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

export default withRoot;
