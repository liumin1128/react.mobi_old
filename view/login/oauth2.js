import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { API_URL } from '@/config/base';
import OauthButton from './components/OauthButton';

const styles = theme => ({
  orLine: {
    textAlign: 'center',
    position: 'relative',
    color: '#d8d8d8',
    margin: '20px 0',
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '43%',
      height: 1,
      top: '50%',
      display: 'block',
      background: '#d8d8d8',
    },
    '&::after': {
      content: "''",
      position: 'absolute',
      width: '43%',
      height: 1,
      top: '50%',
      right: 0,
      display: 'block',
      background: '#d8d8d8',
    },
  },
});

@withStyles(styles)
export default class oauth extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <div className={classes.root}>
          <div className={classes.orLine}>
            <div className={classes.line} />
            <div className={classes.or}>or</div>
          </div>
          <OauthButton
            text="使用Github账号登录"
            color="#24292e"
            icon="https://imgs.react.mobi/FitOmAQE-Ulzbzg3ba2cNRohbhCk"
            url={`${API_URL}/oauth/github`}
          />
          <OauthButton
            text="使用微信账号登录"
            color="#02b234"
            icon="https://imgs.react.mobi/FoRb0_NUH0SrLH6-UfD0jXQnzecd"
            url={`${API_URL}/oauth/wechat`}
          />
        </div>
      </Fragment>
    );
  }
}
