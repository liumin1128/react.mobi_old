import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import CardContent from '@material-ui/core/CardContent';
import Register from '@/view/login/register';
import AppBar from '@/components/Layout/Header/SimpleAppbar';

const styles = {
  card: {
    maxWidth: 360,
    margin: 16,
    boxShadow: 'none',
  },
  media: {
    height: 0,
    paddingTop: '60%',
  },
};

@withStyles(styles)
export default class RegisterPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar title="注册" />
        <Dialog
          hideBackdrop
          open
          // className={classes.card}
          classes={{
            paper: classes.card,
          }}
        >
          <CardContent>
            <Register />
          </CardContent>
        </Dialog>
      </Fragment>
    );
  }
}
