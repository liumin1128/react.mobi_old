import React, { PureComponent, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import CardMedia from '@material-ui/core/CardMedia';
import DialogContent from '@material-ui/core/DialogContent';
import Slide from '@material-ui/core/Slide';
import Login from './login';
import Oauth from './oauth';
import Phone from './phone';
import Register from './register';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const styles = theme => ({
  root: {
    background: 'none',
  },
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
export default class LoginModal extends PureComponent {
  state = {
    mode: 'login',
  }

  switchMode = (mode) => {
    console.log('mode');
    console.log(mode);
    this.setState({ mode });
  }

  renderLogin = () => {
    const { classes } = this.props;
    return (
      <Fragment>
        {
          <CardMedia
            className={classes.media}
            image={'https://imgs.react.mobi/FiIH1AWT8r5hJja50xiBSClwFvek'}
          />
        }
        <DialogContent>
          <Login />
        </DialogContent>
        <DialogContent className={classes.help}>
          <span>
            还没有账号？
            <a onClick={() => { this.switchMode('register'); }}>立即注册</a>
          </span>
          <span>
            <a onClick={() => { this.switchMode('phone'); }}>手机号登录</a>
          </span>
        </DialogContent>
      </Fragment>
    );
  }

  renderRegister = () => {
    const { classes } = this.props;
    return (
      <Fragment>

        <DialogContent>
          <Register />
        </DialogContent>
        <DialogContent className={classes.help}>
          <span>
            已有账号？
            <a onClick={() => { this.switchMode('login'); }}>点击登录</a>
          </span>
          <span>
            <a onClick={() => { this.switchMode('phone'); }}>手机号登录</a>
          </span>
        </DialogContent>
      </Fragment>
    );
  }

  renderPhone = () => {
    const { classes } = this.props;
    return (
      <Fragment>
        {
          <CardMedia
            className={classes.media}
            image={'https://imgs.react.mobi/FiIH1AWT8r5hJja50xiBSClwFvek'}
          />
        }
        <DialogContent>
          <Phone />
        </DialogContent>
        <DialogContent className={classes.help}>
          <span>
          还没有账号？
            <a onClick={() => { this.switchMode('register'); }}>立即注册</a>
          </span>
          <span>
            <a onClick={() => { this.switchMode('login'); }}>用户名密码登录</a>
          </span>
        </DialogContent>
      </Fragment>
    );
  }

  render() {
    const { onClose, classes } = this.props;
    const { mode } = this.state;
    return (
      <Dialog
        open
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        classes={{
          paper: classes.card,
          root: classes.root,
        }}
      >
        {mode === 'login' && this.renderLogin()}
        {mode === 'phone' && this.renderPhone()}
        {mode === 'register' && this.renderRegister()}
        <DialogContent style={{ background: 'rgba(0,0,0,0.02)', padding: 8 }}>
          <Oauth />
        </DialogContent>
      </Dialog>
    );
  }
}
