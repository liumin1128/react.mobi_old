import React, { PureComponent, Fragment } from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Header from '../Header';

const styles = theme => ({
  root: theme.container,
  header: {
    marginBottom: 16,
  },
});

// @pageLoading
@withStyles(styles)
export default class index extends PureComponent {
  render() {
    const { children, classes } = this.props;
    return (
      <Fragment>
        <div className={classes.header}>
          <Header />
        </div>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              {children}
            </Grid>
          </Grid>
        </div>
      </Fragment>
    );
  }
}
