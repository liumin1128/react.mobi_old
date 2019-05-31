import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AppBar from '@/components/Layout/Header/SimpleAppbar';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
  },
  container: theme.container,
});

@withStyles(styles)
export default class News extends PureComponent {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    const { classes, query } = this.props;
    return (
      <div className={classes.root}>
        <AppBar title="用户协议" />

        <Grid className={classes.container} container spacing={16}>
          <Grid item>
            <Typography>你点进来是打算看到什么？</Typography>
            <Typography>然鹅，并没有什么协议...</Typography>
          </Grid>
        </Grid>
      </div>
    );
  }
}
