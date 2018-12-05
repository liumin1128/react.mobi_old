import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@/components/Link';
import Register from '@/container/login/register';
import Oauth from '@/container/login/oauth2';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    maxWidth: 414,
    padding: 36,
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


@withStyles(styles)
export default class RegisterPage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>

        <div className={classes.head}>
          <Typography className={classes.title} variant="h5" gutterBottom>
            注册
          </Typography>
          <Typography className={classes.subline} variant="subtitle1" gutterBottom>
            盗火，成为知识的分享者
          </Typography>
        </div>

        <Register />

        <div className={classes.help}>
          <span>
            还没有账号？
            <Link href="/login/register">立即注册</Link>
          </span>
          <span>
            注册即代表同意《
            <Link href="/login/terms">用户协议</Link>
            》
          </span>
        </div>
        <Oauth />
      </div>
    );
  }
}
