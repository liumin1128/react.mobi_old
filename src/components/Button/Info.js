import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.primary.main,
      cursor: 'pointer',
    },
  },
  icon: {
    width: 16,
    marginTop: 2,
    marginRight: 8,
  },
}));

export default function InfoButton({ label, icon: Icon, onClick, className }) {
  const classes = useStyles();

  return (
    <Box className={classes.root + (className ? ` ${className}` : '')} onClick={onClick}>
      <Icon className={classes.icon} />
      {label}
    </Box>
  );
}
