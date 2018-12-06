import React, { PureComponent } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Article from '@/container/article/list';
import Side from '@/container/article/side';
import Blogrol from '@/components/Blogrol';

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
              <Blogrol />
            </Hidden>
          </Grid>
        </Grid>
      </div>
    );
  }
}
