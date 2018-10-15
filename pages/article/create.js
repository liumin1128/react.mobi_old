import React, { PureComponent } from 'react';
import Create from '@/view/say/create';
import Grid from '@material-ui/core/Grid';

export default class index extends PureComponent {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12} sm={12} md={8}>
          <Create />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          555
        </Grid>
      </Grid>
    );
  }
}
