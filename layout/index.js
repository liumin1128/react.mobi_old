import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Appbar from '../components/appbar';

const styles = theme => ({
  root: theme.container,
});

@withStyles(styles)
export default class News extends PureComponent {
  render() {
    const { classes, children } = this.props;
    return (<div>
      <Appbar />
      <div className={classes.root}>
        {children}
      </div>
    </div>);
  }
}
