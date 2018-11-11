import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from './Header';
// import { pageLoading } from '@/hoc/pageLoading';
// import { modalProvider } from '@/hoc/widthModal';

const styles = theme => ({
  root: theme.container,
  header: {
    marginBottom: 16,
  },
});

// @pageLoading
@withStyles(styles)
// @modalProvider
export default class News extends PureComponent {
  render() {
    const { classes, children } = this.props;
    return (
      <Fragment>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.root}>
          {children}
        </div>
      </Fragment>
    );
  }
}
