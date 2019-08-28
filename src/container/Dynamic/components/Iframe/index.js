
import React from 'react';
import LazyLoad from 'react-lazyload';

import useStyles from './styles';

function Video({ iframe }) {
  const classes = useStyles();
  return (

    <LazyLoad
      debounce={100}
      unmountIfInvisible
      placeholder={<div className={classes.iframe} />}
    >
      <div className={classes.iframe} dangerouslySetInnerHTML={{ __html: iframe }} />

    </LazyLoad>
  );
}

export default Video;
