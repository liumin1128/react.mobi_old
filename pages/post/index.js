import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import { withReduxSaga } from '../../store';
import withRoot from '../../components/material-ui/withRoot';
import AppBar from '../../components/appbar';
import Upload from '../../components/upload';

const styles = () => ({
  root: {
    flexGrow: 1,
    maxWidth: 1110 - 24,
    margin: 'auto',
    background: '#fff',
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
        <Paper className={classes.root} elevation={4}>
          <h1>666</h1>
          <Upload />
        </Paper>
      </div>
    );
  }
}

