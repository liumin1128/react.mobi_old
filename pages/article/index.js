import React, { PureComponent } from 'react';
// import Link from '@/components/Link';
import Grid from '@material-ui/core/Grid';
import Article from '@/container/article/list';
import Side from '@/container/article/side';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={8}>
            <Article />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Side />
          </Grid>
        </Grid>
      </div>
    );
  }
}
