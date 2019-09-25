import React, { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
import { scrollToTopEaseing, getScrollTop } from '@/utils/common';

export default function () {
  const classes = useStyles();

  const [ visible, setVisible ] = useState(getScrollTop() > 300);

  function updateVisible() {
    return throttle(() => {
      setVisible(getScrollTop() > 300);
    }, 300, { leading: true })();
  }


  useEffect(() => {
    window.addEventListener('scroll', updateVisible);
    return function cleanup() {
      window.removeEventListener('scroll', updateVisible);
    };
  });

  if (!visible) return null;

  return (
    <Box
      className={classes.root}
      onClick={() => {
        scrollToTopEaseing();
      }}
    >
      返回顶部
    </Box>
  );
}
