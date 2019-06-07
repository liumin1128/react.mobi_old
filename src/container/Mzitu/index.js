import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from './List';
import Sider from './Sider';
import Tags from './List/Tags';

export default () => (
  <Grid container spacing={2}>
    <Grid item xs={12} sm={12} md={9}>
      <Tags />
      <br />
      <List />
    </Grid>
    <Grid item xs={12} sm={12} md={3}>
      <Sider />
    </Grid>
  </Grid>
);
