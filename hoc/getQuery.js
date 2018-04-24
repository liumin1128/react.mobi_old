import React, { PureComponent, createContext } from 'react';

const RouterContext = React.createContext();

export function queryProvider(WrappedComponent) {
  return class RouterContextProvider extends PureComponent {
    static async getInitialProps({ query }) {
      return { query };
    }
    render() {
      return (<RouterContext.Provider value={this.props.query}>
        <WrappedComponent {...this.props} />
      </RouterContext.Provider>);
    }
  };
}

export function queryConsumer(WrappedComponent) {
  return class RouterContextConsumer extends PureComponent {
    render() {
      return (<RouterContext.Consumer>
        {query => <WrappedComponent query={query} />}
      </RouterContext.Consumer>);
    }
  };
}

