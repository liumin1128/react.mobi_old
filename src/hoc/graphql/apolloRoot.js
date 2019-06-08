import React from 'react';
import PropTypes from 'prop-types';
import { getDataFromTree, ApolloProvider } from 'react-apollo';
import { getMarkupFromTree } from 'react-apollo-hooks';
import Head from 'next/head';
import { renderToString } from 'react-dom/server';
import initApollo from './initApollo';

export default (App) => {
  return class WithData extends React.Component {
    static displayName = `WithData(${App.displayName})`

    static propTypes = {
      apolloState: PropTypes.object.isRequired,
    }

    static async getInitialProps(ctx) {
      const {
        Component,
        router,
        ctx: { req, res },
      } = ctx;
      const apollo = initApollo();

      ctx.ctx.apolloClient = apollo;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res && res.finished) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        return {};
      }

      if (!process.browser) {
        // Run all graphql queries in the component tree
        // and extract the resulting data
        try {
          // Run all GraphQL queries
          // await getDataFromTree(
          //   <App
          //     {...appProps}
          //     Component={Component}
          //     router={router}
          //     apolloClient={apollo}
          //   />,
          // );

          // 使用hook形式的ssr渲染器
          await getMarkupFromTree({
            renderFunction: renderToString,
            tree: (
              <App
                {...appProps}
                Component={Component}
                router={router}
                apolloClient={apollo}
              />
            ),
          });
        } catch (error) {
          console.error('Error while running `getDataFromTree`', error);
        }

        Head.rewind();
      }

      // Extract query data from the Apollo's store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    constructor(props) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    render() {
      return (
        <App {...this.props} apolloClient={this.apolloClient} />
      );
    }
  };
};
