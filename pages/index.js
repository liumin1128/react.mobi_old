import React, { PureComponent } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { withReduxSaga } from '../store';
import AppBar from '../components/appbar';
import withRoot from '../components/material-ui/withRoot';
import NewsList from '../container/say/list';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    marginTop: 32,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
          <Grid container spacing={24}>
            <Grid item xs={12} sm={8}>
              <NewsList />
            </Grid>
            <Grid item xs={12} sm={4}>
              <p />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

