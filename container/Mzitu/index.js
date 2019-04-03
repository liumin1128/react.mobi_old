import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from './List';
import Sider from './Sider';

export default () => (
  <Grid container spacing={16}>
    <Grid item xs={12} sm={12} md={9}>
      <List />
    </Grid>
    <Grid item xs={12} sm={12} md={3}>
      <Sider />
    </Grid>
  </Grid>
);
