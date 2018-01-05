import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';

const styles = {
  root: {
    width: '100%',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
    marginBottom: 16,
  },
  disabled: {
    width: '100%',
    borderRadius: 3,
    border: 0,
    // color: 'white',
    height: 48,
    padding: '0 30px',
    marginBottom: 16,
    // cursor: 'not-allowed',
    // background: 'linear-gradient(45deg, #FA96AC 30%, #FFB995 90%)',
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
      disabled={disabled || loading}
      raised
      classes={{
        root: disabled ? classes.disabled : classes.root, // className, e.g. `OverridesClasses-root-X`
        label: classes.label, // className, e.g. `OverridesClasses-label-X`
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
