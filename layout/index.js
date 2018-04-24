import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Appbar from '../components/appbar';

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
    return (<div className={classes.root}>
      <Appbar />
      {children}
    </div>);
  }
}
