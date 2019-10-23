import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@/components/Link';
import Login from '@/container/login/login';
import Oauth from '@/container/login/oauth';
import { withApollo } from '@/lib/apollo';

const styles = (theme) => ({
  root: {
    maxWidth: 414,
    padding: '0 36px',
    margin: '0 auto',
  },
  subline: {
    color: '#999',
  },
  head: {
    margin: '48px 0',
  },
  help: {
    fontSize: 12,
    marginTop: 20,
    marginBottom: 48,
    color: '#666',
    display: 'flex',
    justifyContent: 'space-between',
    '& a': {
      color: '#666',
      textDecoration: 'none',
    },
  },
});


@withApollo
@withStyles(styles)
export default class LoginPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

        <div className={classes.head}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            登录
          </Typography>
          <Typography className={classes.subline} variant="subtitle1" gutterBottom>
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
