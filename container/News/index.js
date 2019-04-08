import React, { Fragment } from 'react';
import List from './List';
import Recommend from './Recommend';
import GridList from './GridList';

export default () => (
  <Fragment>
    <Recommend />
    <br />
    <List />
    <br />
    <GridList />
  </Fragment>
);
