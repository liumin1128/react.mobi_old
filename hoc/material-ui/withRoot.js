import React from 'react';
import PropTypes from 'prop-types';
import getPageContext from './getPageContext';

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
      return <App {...this.props} pageContext={this.pageContext} />;
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
