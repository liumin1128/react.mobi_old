import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';

const styles = () => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
  },
});

@withStyles(styles)
export default class News extends PureComponent {
  render() {
    const { classes, children } = this.props;
    return (<div className={classes.root}>{children}</div>);
  }
}
