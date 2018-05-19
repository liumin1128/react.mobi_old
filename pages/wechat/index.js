import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@/view/wechat/list';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    marginTop: theme.spacing.unit * 3,
  },
  body: {
    maxWidth: 760,
    width: '100%',
    margin: '0 auto',
  },
  container: {
    boxSizing: 'border-box',
    margin: 0,
    // border: '1px red solid',
    width: '100%',
    '@media (max-width: 960px)': {
      margin: 0,
    },
  },
});


@withStyles(styles)
export default class News extends PureComponent {
  static async getInitialProps({ query }) {
    return { query };
  }
  // componentDidMount() {
  //   console.log('xxx');
  // }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.root}>
          <Grid className={classes.container} container spacing={24}>
            <Grid item xs={12} sm={12} md={8}>
              <div className={classes.body}>
                <List />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className={classes.body}>
                <h1>777</h1>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
