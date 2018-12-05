import React, { PureComponent, Fragment } from 'react';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import CardContent from '@material-ui/core/CardContent';
import Register from '@/container/login/register';
import AppBar from '@/components/Layout/Header/SimpleAppbar';

const styles = theme => ({
  root: {
    background: 'none',
    marginTop: 64,
  },
  card: {
    maxWidth: 360,
    margin: '16px auto',
    boxShadow: 'none',
    // [theme.breakpoints.down('xs')]: {
    //   margin: '16px auto',
    // },
  },
  media: {
    height: 0,
    paddingTop: '60%',
  },
  help: {
    // background: 'red',
    paddingTop: 0,
    fontSize: 12,
    color: '#666',
    display: 'flex',
    justifyContent: 'space-between',
    '&  a': {
      color: '#666',
      textDecoration: 'none',
    },
  },
});


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
          scroll="body"
          // className={classes.card}
          classes={{
            paper: classes.card,
            root: classes.root,
          }}
        >
          <br />
          <CardContent>
            <Register />
          </CardContent>
          <CardContent className={classes.help}>

            <span>
              已有账号？
              <Link href="/login">点击登录</Link>
            </span>

            <span>
              注册即代表同意《
              <Link href="/login/terms">用户协议</Link>
              》
            </span>
          </CardContent>
        </Dialog>
      </Fragment>
    );
  }
}
