import React, { PureComponent } from 'react';
import Link from 'next/link';
import { withStyles } from 'material-ui/styles';
// import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import withRoot from '../material-ui/withRoot';
import withData from '../lib/withData';
import { withReduxRoot } from '../store';
import SaysList from '../view/says/list';


const styles = () => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    marginTop: 32,
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

@withReduxRoot
@withData
@withRoot
@withStyles(styles)
export default class News extends PureComponent {
  // static async getInitialProps({ query, store }) {
  //   await store.dispatch({ type: 'test', payload: query });
  //   return query;
  // }
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
                <SaysList />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <div className={classes.body}>
                <h1>777</h1>
                <Link href="say/create"><a>say/create</a></Link>
                <br />
                <Link href="article/create"><a>article/create</a></Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
