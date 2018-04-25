import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import withRoot from '../../hoc';
import List from '../../view/says/list';
import Layout from '../../layout';

@withRoot
export default class Says extends PureComponent {
  // static async getInitialProps({ query }) {
  //   return { query };
  // }
  render() {
    return (
      <Layout>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={8}>
            <List />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
              2
          </Grid>
        </Grid>
      </Layout>
    );
  }
}
