import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  icon: {
    position: 'absolute',
    left: 24,
  },
});

@withStyles(styles)
export default class LoadingButton extends PureComponent {
  render() {
    const { children, classes, loading, ...props } = this.props;
    return (
      <Button {...props}>
        {loading && (
          <CircularProgress
            className={classes.icon}
            color="inherit"
            size={20}
            thickness={5}
          />
        )}
        {children}
      </Button>
    );
  }
}
