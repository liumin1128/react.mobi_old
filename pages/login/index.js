import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Dialog from '@material-ui/core/Dialog';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Login from '@/view/login/login';
import AppBar from '@/components/Layout/Header/SimpleAppbar';

const styles = theme => ({
  card: {
    maxWidth: 360,
    margin: 16,
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
        <AppBar title="登录" />
        <Dialog
          hideBackdrop
          open
          // className={classes.card}
          classes={{
            paper: classes.card,
          }}
        >
          {
            // <CardMedia
            //   className={classes.media}
            //   image={'https://imgs.react.mobi/FiIH1AWT8r5hJja50xiBSClwFvek'}
            // />
          }
          <CardContent>
            <Login />

          </CardContent>
          <CardContent className={classes.help}>
            <span>
              还没有账号？
              <Link href="/login/register">立即注册</Link>
            </span>
            <span>
              <Link href="/login/phone">手机号登录</Link>
            </span>
          </CardContent>
        </Dialog>
      </Fragment>
    );
  }
}
