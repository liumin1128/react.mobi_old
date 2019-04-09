import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  html: {
    // border: '1px red solid',
    fontSize: 16,
    '& img': {
      // width: '100%',
    },
    '& figure': {
      margin: 0,
    },
    // '& a': {
    //   margin: 0,
    //   display: 'block',
    // },
  },
});

export default withStyles(styles)(({ html, classes }) => (
  <Typography component="div" className={classes.html}>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </Typography>
));
