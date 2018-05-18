import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core/Progress';

const styles = theme => ({
  root: theme.container,
});

@withStyles(styles)
export default class extends PureComponent {
  render() {
    const { classes } = this.props;
    return (<div className={classes.root}>
      <CircularProgress
        size={18}
        className={classes.progress}
        color="inherit"
      />
    </div>);
  }
}
