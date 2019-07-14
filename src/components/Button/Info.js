import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    color: '#999',
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

export default function InfoButton({ label, icon: Icon, onClick }) {
  const classes = useStyles();

  return (
    <Box className={classes.root} onClick={onClick}>
      <Icon className={classes.icon} />
      {label}
    </Box>
  );
}
