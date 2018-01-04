// import React from 'react';
import Snackbar from './snackbar';
import Container from './container';
// import Icon from '../icon';

Snackbar.warn = props => Container({
  type: 'warn',
  ...props,
});

Snackbar.success = props => Container({
  type: 'success',
  ...props,
});

export default Snackbar;
