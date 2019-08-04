import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  root: {
    position: 'relative',
  },
  progress: {
    width: '20px',
    height: '20px',
    display: 'block',

    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    margin: 'auto',
  },

  marsk: {
    width: '100%',
    height: '100%',
    background: 'rgba(255,255,255,0.5)',
    position: 'absolute',
    top: 0,
  },
});

function CircularIndeterminate({ classes, children, loading, ...props }) {
  return (
    <div className={classes.root}>
      {children}
      {loading && (
        <div className={classes.marsk}>
          <CircularProgress className={classes.progress} {...props} />
        </div>
      )}
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
