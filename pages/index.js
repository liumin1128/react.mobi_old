import React, { PureComponent } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Article from '@/view/article/list';
import Side from '@/view/article/side';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={8}>
            <Article />
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
