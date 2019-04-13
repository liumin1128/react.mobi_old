import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
// import List from './List';
import Recommend from './GridList';
// import GridList from './GridList';

export default () => (
  <Fragment>
    <br />
    <Typography variant="h5" gutterBottom>Switch News</Typography>
    <Recommend />
  </Fragment>
);
