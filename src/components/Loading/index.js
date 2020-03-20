import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import nossr from '@/hoc/nossr';

const styles = (theme) => ({
  progress: {
    margin: '16px auto',
    width: 20,
    height: 20,
    display: 'block',
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <CircularProgress color="secondary" size={20} className={classes.progress} />
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default nossr(withStyles(styles)(CircularIndeterminate));
