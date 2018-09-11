import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { pageLoading } from '@/hoc/pageLoading';
// import { modalProvider } from '@/hoc/widthModal';

const styles = theme => ({
  root: theme.container,
});

// @pageLoading
@withStyles(styles)
// @modalProvider
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
