// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

const styles = () => ({
  progress: {
    // color: '#ccc',
  },
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress
        size={20}
        thickness={3}
        className={classes.progress}
      />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularIndeterminate);
