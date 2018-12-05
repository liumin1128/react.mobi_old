import React, { PureComponent, Fragment } from 'react';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Login from '@/container/login/phone';
import Oauth from '@/container/login/oauth';
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
export default class LoginPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppBar title="手机验证码登录" />
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
          <CardMedia
            className={classes.media}
            image={'https://imgs.react.mobi/FiIH1AWT8r5hJja50xiBSClwFvek'}
          />
          <CardContent>
            <Login />
          </CardContent>
          <CardContent className={classes.help}>
            <span>
              还没有账号？
              <Link href="/login/register">立即注册</Link>
            </span>
            <span>
              <Link href="/login">用户名密码登录</Link>
            </span>
          </CardContent>

          <CardContent style={{ background: 'rgba(0,0,0,0.02)', padding: 8 }}>
            <Oauth />
          </CardContent>
        </Dialog>
      </Fragment>
    );
  }
}
