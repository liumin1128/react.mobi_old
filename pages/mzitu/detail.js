
import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Detail from '@/container/mzitu/detail';
import Side from '@/container/mzitu/side';
import { withRouter } from 'next/router';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
  },
  container: theme.container,
});

@withRouter
@withStyles(styles)
export default class News extends PureComponent {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    const { classes, router } = this.props;
    const { id } = router.query;
    return (
      <div className={classes.root}>
        <Grid className={classes.container} container spacing={16}>
          <Grid item xs={12} sm={12} md={8}>
            <Detail id={id} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Side />
          </Grid>
        </Grid>
      </div>
    );
  }
}
