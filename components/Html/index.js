import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  html: {
    // border: '1px red solid',
    fontSize: 16,
    '& img': {
      maxWidth: '100%',
      margin: 'auto',
    },
    '& figure': {
      margin: 0,
    },
    '& figure a': {
    },
    '& figure img': {
      marginTop: '-16px',
      marginBottom: '-16px',
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
