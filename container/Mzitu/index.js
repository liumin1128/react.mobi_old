import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from './List';
import Sider from './Sider';

const styles = theme => ({
  root: theme.container,
});

export default withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      <Grid item xs={12} sm={12} md={8}>
        <List />
      </Grid>
      <Grid item xs={12} sm={12} md={4}>
        <Sider />
      </Grid>
    </Grid>
  </div>
));
