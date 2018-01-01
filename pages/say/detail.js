import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import { withReduxSaga } from '../../store';
import AppBar from '../../components/appbar';
import withRoot from '../../components/material-ui/withRoot';
import Detail from '../../container/say/detail';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    background: '#fff',
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
  // static async getInitialProps({ query, store }) {
  //   // console.log('query');
  //   // console.log(query);
  //   await store.dispatch({
  //     type: 'say/detail',
  //     payload: query,
  //   });
  //   return query;
  // }
  componentWillMount() {
    const { dispatch, url } = this.props;
    dispatch({
      type: 'say/detail',
      payload: url.query,
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar />

        <div className={classes.root}>
          <Detail />
        </div>

        <style jsx>{`
          .h1 {
            color: red;
            font-size: 30px;
          }
        `}</style>
      </div>
    );
  }
}

