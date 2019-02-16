import React, { PureComponent } from 'react';
import Link from '@/components/Link';
import Article from '@/container/article/list';
import Grid from '@material-ui/core/Grid';

export default class index extends PureComponent {
  render() {
    return (
      <Grid container spacing={16}>
        <Link to={'/say/create'}>create</Link>
        <Grid item xs={12} sm={12} md={8}>
          <Article />
        </Grid>
      </Grid>
    );
  }
}
