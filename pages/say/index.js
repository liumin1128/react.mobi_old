import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@/view/says/list';
import Layout from '@/components/layout';
import Calender from '@/components/calender';
import Appbar from '@/components/appbar';

export default class Says extends PureComponent {
  render() {
    return (
      <Layout>
        <Appbar />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} md={8}>
            <List />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Calender />
          </Grid>
        </Grid>
      </Layout>
    );
  }
}
