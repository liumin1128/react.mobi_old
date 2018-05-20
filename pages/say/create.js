import React, { PureComponent, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Layout from '@/components/layout';
import Appbar from '@/components/appbar';
import Create from '@/view/says/create';

export default class Says extends PureComponent {
  render() {
    return (
      <Fragment>
        <Appbar />
        <Layout>
          <Grid container spacing={16}>
            <Grid item xs={12} sm={12} md={8}>
              <Create />
            </Grid>
          </Grid>
        </Layout>
      </Fragment>
    );
  }
}
