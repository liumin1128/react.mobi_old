import React, { PureComponent } from 'react';
// import Link from '@/components/Link';
import Article from '@/view/article/list';
import Grid from '@material-ui/core/Grid';

export default class index extends PureComponent {
  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item xs={12} sm={12} md={8}>
            <Article />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            666
          </Grid>
        </Grid>
      </div>
    );
  }
}
