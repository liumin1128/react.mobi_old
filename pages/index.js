import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import styleRoot from '../hoc/styleRoot';
import apolloRoot from '../hoc/apolloRoot';
import reduxRoot from '../hoc/reduxRoot';
// import { queryProvider } from '../hoc/getQuery';
import SaysList from '../view/says/list';
import Layout from '../layout';

@reduxRoot
@apolloRoot
@styleRoot
// @queryProvider
export default class News extends PureComponent {
  static async getInitialProps({ query }) {
    return { query };
  }
  render() {
    return (
      <Layout>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={8}>
            <SaysList />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
              2
          </Grid>
        </Grid>
      </Layout>
    );
  }
}
