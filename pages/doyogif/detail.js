import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Layout from '@/components/layout';
import Detail from '@/view/doyogif/detail';

export default class News extends PureComponent {
  static async getInitialProps({ query }) {
    return { query };
  }
  render() {
    const { query } = this.props;
    return (
      <Layout >
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={12}>
            <Detail query={query} />
          </Grid>
        </Grid>
      </Layout>
    );
  }
}