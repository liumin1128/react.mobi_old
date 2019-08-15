
import React from 'react';
import useStyles from './styles';

function Video({ iframe }) {
  const classes = useStyles();
  return (
    <div className={classes.iframe} dangerouslySetInnerHTML={{ __html: iframe }} />
  );
}

export default Video;
