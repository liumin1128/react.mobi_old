import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { withReduxSaga } from '../store';
import AppBar from '../components/appbar';
import withRoot from '../components/material-ui/withRoot';
import NewsList from '../container/say/list';
import Explore from '../container/explore';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    marginTop: 32,
  },
  body: {
    maxWidth: 700,
    width: '100%',
    margin: '0 auto',
  },
  container: {
    boxSizing: 'border-box',
    margin: 0,
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
    await store.dispatch({
      type: 'say/init',
      payload: query,
    });
    return query;
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'say/init',
      // payload: query,
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar />
        <div className={classes.root}>
          <Grid className={classes.container} container spacing={24}>
            <Grid item xs={12} sm={12} md={8}>
              <div className={classes.body}>
                <NewsList />
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={4} >
              <div className={classes.body}>
                <Explore />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

