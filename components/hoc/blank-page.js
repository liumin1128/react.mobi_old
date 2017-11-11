import React, { PureComponent } from 'react';

export default Layout => (BaseComponent) => {
  return class extends PureComponent {
    static getInitialProps(ctx) {
      if (BaseComponent.getInitialProps) {
        return BaseComponent.getInitialProps(ctx);
      }
      return {};
    }
    componentWillMount() {
      this.props.dispatch({ type: 'common/save', payload: { currentPath: this.props.url.pathname } });
    }
    render() {
      return (<Layout >
        <BaseComponent {...this.props} />
      </Layout>);
    }
  };
};
