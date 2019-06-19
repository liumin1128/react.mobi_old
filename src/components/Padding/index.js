import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

function MyPadding({ padding = 8 }) {
  const useStyles = makeStyles(theme => ({
    root: {
      width: padding,
      height: padding,
      display: 'inline-block',
    },
  }));
  const classes = useStyles();
  return (
    <span className={classes.root} />
  );
}

export default MyPadding;
