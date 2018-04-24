import React, { PureComponent, createContext } from 'react';

export const RouterContext = createContext();

export function queryProvider(WrappedComponent) {
  return class RouterContextProvider extends PureComponent {
    static async getInitialProps({ query }) {
      let props = {};
      if (WrappedComponent.getInitialProps) {
        props = await WrappedComponent.getInitialProps();
      }
      return { ...props, query };
    }
    render() {
      return (<RouterContext.Provider value={this.props}>
        <WrappedComponent {...this.props} />
      </RouterContext.Provider>);
    }
  };
}

export function withQuery(WrappedComponent) {
  return function ThemedComponent(props) {
    return (
      <RouterContext.Consumer>
        {({ url }) => {
          return <WrappedComponent {...props} url={url} />;
        }}
      </RouterContext.Consumer>
    );
  };
}

