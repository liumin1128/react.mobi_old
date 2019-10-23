import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { API_URL } from '@/config/base';
// import { useTheme } from '@/hoc/theme';
import OauthButton from './components/OauthButton';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 64,
  },
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
}));

function Oauth() {
  const classes = useStyles();
  // const { theme } = useTheme();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.orLine}>
          <div className={classes.line} />
          <div className={classes.or}>or</div>
        </div>
        <OauthButton
          text="使用Github账号登录"
          color={'#ffffff'}
          // color={theme.palette.type === 'dark' ? '#ffffff' : '#24292e'}
          icon="https://imgs.react.mobi/FitOmAQE-Ulzbzg3ba2cNRohbhCk"
          url={`${API_URL}/oauth/github`}
        />
        <OauthButton
          text="使用微信账号登录"
          color="#02b234"
          icon="https://imgs.react.mobi/FoRb0_NUH0SrLH6-UfD0jXQnzecd"
          url={`${API_URL}/oauth/wechat`}
        />
        <OauthButton
          text="使用QQ账号登录"
          color="#0fb4ee"
          icon="https://imgs.react.mobi/Fj2wmuujbWAz70-kIxa-8dNCDOrB"
          url={`${API_URL}/oauth/qq`}
        />
        <OauthButton
          text="使用新浪微博账号登录"
          color="#eb192d"
          icon="https://imgs.react.mobi/Fk_dlrKcrqzUU4PJdtJRoR2VAkP7"
          url={`${API_URL}/oauth/weibo`}
        />
        <OauthButton
          text="使用Microsoft账号登录"
          color="#0067b8"
          icon="https://imgs.react.mobi/FsRmgY99IhggoAUEEGPWG7JMnkWO"
          url={`${API_URL}/oauth/outlook`}
        />
      </div>
      {
        <style global jsx>
          {`
            body {
              background-image: url('/static/bg.svg');
              background-repeat: no-repeat;
              background-size: 100% auto;
              background-attachment:fixed;
            }
          `}
        </style>
      }
    </>
  );
}

export default Oauth;
