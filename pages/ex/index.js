import React, { PureComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@/view/explore/list';
// import Calender from '@/components/Calender';

export default class Says extends PureComponent {
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12} sm={12} md={8}>
          <List />
        </Grid>
      </Grid>
    );
  }
}
