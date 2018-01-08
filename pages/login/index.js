import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { withReduxSaga } from '../../store';
import withRoot from '../../components/material-ui/withRoot';
import AppBar from '../../components/appbar';
import Login from '../../container/login';


const styles = () => ({
  root: {
    flexGrow: 1,
    maxWidth: 380,
    margin: '160px auto',
    background: '#fff',
    boxShadow: '0 10px 28px 0 rgba(137,157,197,.12)',
  },
});

@withReduxSaga
@withRoot
@withStyles(styles)
export default class extends PureComponent {
  // static async getInitialProps({ query, store }) {
  //   await store.dispatch({
  //     type: 'user/login',
  //     payload: query,
  //   });
  //   return query;
  // }
  componentDidMount() {
    const { dispatch, url } = this.props;
    dispatch({ type: 'user/getUserInfo', payload: url.query });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar />
        <Paper className={classes.root} elevation={4}>
          <Login />
        </Paper>
      </div>
    );
  }
}

