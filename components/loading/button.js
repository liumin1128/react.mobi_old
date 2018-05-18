import React, { PureComponent } from 'react';
import { withStyles } from ’@material-ui/corestyles';
import Button from ’@material-ui/coreButton';
import { CircularProgress } from ’@material-ui/coreProgress';

const styles = {
  root: {
    width: '100%',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 0,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    marginBottom: 16,
  },
  label: {
    textTransform: 'capitalize',
  },
  progress: {
    marginRight: 16,
  },
};


@withStyles(styles)
export default class extends PureComponent {
  render() {
    const {
      classes, disabled, loading, children, ...other
    } = this.props;
    return (<Button
      // disabled={disabled || loading}
      variant="raised"
      classes={{
        root: classes.root,
        label: classes.label,
      }}
      {...other}
    >
      {loading && <CircularProgress
        size={18}
        className={classes.progress}
        color="inherit"
      />}
      {children}
    </Button>);
  }
}
