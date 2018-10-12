import React, { PureComponent, Fragment } from 'react';
import Create from '@/view/say/create';
import Grid from '@material-ui/core/Grid';

export default class index extends PureComponent {
  render() {
    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item md={8} xs={12}>
            <Create />
          </Grid>
          <Grid item md={4} xs={12}>
            right
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
