import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: theme.container,
});

@withStyles(styles)
export default class News extends PureComponent {
  render() {
    const { classes, children } = this.props;
    return (
      <div className={classes.root}>
        {children}
      </div>
    );
  }
}
