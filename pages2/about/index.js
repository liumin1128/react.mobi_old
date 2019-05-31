import React, { PureComponent } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Side from '@/container/side';
import Typography from '@material-ui/core/Typography';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={8}>
            <Typography variant="h6" gutterBottom>
              关于作者
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Hidden implementation="css" only={[ 'sm', 'xs' ]}>
              <Side />
            </Hidden>
          </Grid>
        </Grid>
      </div>
    );
  }
}
