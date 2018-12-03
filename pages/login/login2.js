import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@/components/Link';
import Login from '@/view/login/login';
import AppBar from '@/components/Layout/Header/SimpleAppbar';
import Oauth from '@/view/login/oauth2';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    background: 'none',
    maxWidth: 500,
    padding: 36,
  },
  title: {
  },
  subline: {
    color: '#ccc',
  },
  head: {
    marginTop: 64,
    marginBottom: 64,
  },
  help: {
    fontSize: 12,
    marginTop: 20,
    marginBottom: 64,
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
  componentDidMount() {
    // window.document.body.style.background = '#fff';
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <style global jsx>
          {`
            body {
              background: #fff !important;
            }
          `}
        </style>
        <div className={classes.head}>
          <Typography className={classes.title} variant="h5" gutterBottom>
              登录
          </Typography>
          <Typography className={classes.subline} variant="body2" gutterBottom>
              盗火，一个年轻的知识社区
          </Typography>
        </div>

        <Login />

        <div className={classes.help}>
          <span>
              还没有账号？
            <Link href="/login/register">立即注册</Link>
          </span>
          <span>
            <Link href="/login/phone">手机号登录</Link>
          </span>
        </div>

        <Oauth />

      </div>
    );
  }
}
