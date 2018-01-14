import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import { withReduxSaga } from '../../store';
import withRoot from '../../components/material-ui/withRoot';
import AppBar from '../../components/appbar';
import Create from '../../container/post';

const styles = () => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110 - 24,
    margin: 'auto',
    background: '#fff',
  },
  textarea: {
    maxWidth: 700,
    margin: '0 auto',
    paddingTop: 60,
    paddingBottom: 60,
  },
});

@withReduxSaga
@withRoot
@withStyles(styles)
export default class extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <AppBar />
        <div className={classes.root}>
          <div className={classes.textarea}>
            <Create />
          </div>
        </div>
      </div>
    );
  }
}

