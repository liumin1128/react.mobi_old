import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import List from '../../view/bxgif/list';
import withRoot from '../../hoc';
import Layout from '../../layout';


@withRoot
export default class News extends PureComponent {
  render() {
    return (
      <Layout >
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={12}>
            <List />
          </Grid>
        </Grid>
      </Layout>
    );
  }
}
