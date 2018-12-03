import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Dialog from '@material-ui/core/Dialog';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
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
    // textAlign: 'center',
  },
  subline: {
    // textAlign: 'center',
    color: '#ccc',
  },
  head: {
    marginTop: 64,
    marginBottom: 64,
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
      <Fragment>
        <div className={classes.root}>
          <div className={classes.head}>
            <Typography className={classes.title} variant="h5" gutterBottom>
              登录
            </Typography>
            <Typography className={classes.subline} variant="body2" gutterBottom>
              盗火，一个年轻的知识社区
            </Typography>
          </div>

          <Login />
          <Oauth />
        </div>
      </Fragment>
    );
  }
}
