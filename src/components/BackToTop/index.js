import React, { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
import { scrollToTop, getScrollTop } from '@/utils/common';
import { useOnMount } from '@/hooks';


export default function () {
  const classes = useStyles();

  const [ visible, setVisible ] = useState(false);

  function updateVisible() {
    return throttle(() => {
      const scrollTop = getScrollTop();
      if (scrollTop > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
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
    <Box className={classes.root} onClick={scrollToTop}>
      返回顶部
    </Box>
  );
}
