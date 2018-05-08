import React, { PureComponent, Fragment } from 'react';
import Grid from 'material-ui/Grid';
import withRoot from '../../hoc';
import List from '../../view/explore/list';
import Layout from '../../components/layout';
import Calender from '../../components/calender';
import Appbar from '../../components/appbar';

@withRoot
export default class Says extends PureComponent {
  render() {
    return (
      <Fragment>
        <Appbar />
        <Layout>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={8}>
              <List />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Calender />
            </Grid>
          </Grid>
        </Layout>
      </Fragment>
    );
  }
}
