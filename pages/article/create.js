import React, { PureComponent, Fragment } from 'react';
import Grid from 'material-ui/Grid';
import withRoot from '../../hoc';
import Layout from '../../layout';
import Create from '../../view/article/create';

@withRoot
export default class Says extends PureComponent {
  render() {
    return (
      <Fragment>
        <Layout>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} md={8}>
              <Create />
            </Grid>
          </Grid>
        </Layout>
      </Fragment>
    );
  }
}
