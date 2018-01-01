import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import { withReduxSaga } from '../../store';
import withRoot from '../../components/material-ui/withRoot';

const styles = () => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    background: '#fff',
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
    return (
      <div>
        <h1>登录成功</h1>
      </div>
    );
  }
}

