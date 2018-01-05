import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';
import { withReduxSaga } from '../../store';
import AppBar from '../../components/appbar';
import withRoot from '../../components/material-ui/withRoot';
import Detail from '../../container/say/detail';
// import Comment from '../../container/comment';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110,
    margin: 'auto',
    background: '#fff',
  },
  content: {
    width: '100%',
    maxWidth: 700,
    margin: '0 auto',
    padding: '60px 0',
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const Comment = dynamic(
  import('../../container/comment'),
  {
    ssr: false,
    loading: () => (<div>
      <CircularProgress size={20} />
    </div>),
  },
);

@withReduxSaga
@withRoot
@withStyles(styles)
export default class extends PureComponent {
  static async getInitialProps({ query, store }) {
    // console.log('query');
    // console.log(query);
    await store.dispatch({
      type: 'say/detail',
      payload: query,
    });
    return query;
  }
  componentWillMount() {
    const { dispatch, url } = this.props;
    dispatch({
      type: 'say/detail',
      payload: url.query,
    });
  }
  render() {
    const { classes, id } = this.props;
    return (
      <div>
        <AppBar />

        <div className={classes.root}>
          <div className={classes.content}>
            <Detail />
            <Comment id={id} />
          </div>

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

