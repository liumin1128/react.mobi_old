import React from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
import { scrollToTop } from '@/utils/common';

export default function () {
  const classes = useStyles();

  return (
    <Box className={classes.root} onClick={scrollToTop}>
      返回顶部
    </Box>
  );
}
