import React from 'react';
import Typography from '@material-ui/core/Typography';

export default ({ html }) => (
  <Typography component="div">
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Typography>
);
