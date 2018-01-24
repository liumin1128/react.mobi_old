import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Head from 'next/head';
import { withReduxSaga } from '../../store';
import AppBar from '../../components/appbar';
import withRoot from '../../components/material-ui/withRoot';
import ArticleList from '../../container/article/list';
// import Matrix from '../../container/matrix';
// import Tabs from '../../components/appbar/tabs';

const styles = () => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    marginTop: 64,
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

@withReduxSaga
@withRoot
@withStyles(styles)
export default class extends PureComponent {
  static async getInitialProps({ query, store }) {
    await store.dispatch({ type: 'article/init', payload: query });
    return query;
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'article/init' });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Head>
          <title>{'盗火'}</title>
        </Head>
        <AppBar />
        <div className={classes.root}>
          <Grid className={classes.container} container spacing={24}>
            <Grid item xs={12} sm={12} md={8}>
              <div className={classes.body}>
                <ArticleList />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} >
              <div className={classes.body}>
              2
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

