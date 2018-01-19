import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import Router from 'next/router';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui-icons/Search';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Input, { InputAdornment } from 'material-ui/Input';
import Hidden from 'material-ui/Hidden';
import Menu, { MenuItem } from 'material-ui/Menu';
import User from './user';
import Search from './search';

const styles = {
  root: {
    width: '100%',
    height: 64,
    zIndex: 999,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    // marginLeft: -12,
    marginRight: 20,
  },
  appbar: {
    boxShadow: 'none',
  },
  logo: {
    width: 48,
    height: 48,
  },
  toolbar: {
    maxWidth: 1110,
    padding: '0 12px',
    width: '100%',
    // border: '1px red solid',
    margin: '0 auto',
    boxSizing: 'border-box',
  },
  navList: {
    flex: 1,
  },
  nav: {
    fontSize: 16,
    height: 64,
  },
  textFieldRoot: {
    background: 'rgba(255,255,255,0.11)',
    paddingLeft: 8,
    width: 180,
    transition: '0.3s',
    display: 'flex',
    alignItems: 'center',
    '& >  input': {
      color: '#fff',
    },
  },
  textFieldFocused: {
    background: 'rgba(0,0,0,0.1)',
    width: 220,
  },
  textFieldInput: {
    color: '#fffff',
  },
  search: {
    // border: '1px red solid',
    fontSize: 16,
    width: 36,
    height: 36,
  },
  center: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  right: {
    marginLeft: 16,
  },
  loged: {
    display: 'flex',
    alignItems: 'center',
  },
};

@connect(({ user }) => ({ userInfo: user.userInfo }))
@withStyles(styles)
export default class extends PureComponent {
  state = {
    theme: 'black',
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { router } = Router;
    if (router && router.query && router.query.token) {
      console.log(router.query.token);
      dispatch({ type: 'user/saveOauthToken', payload: { token: router.query.token } });
    } else {
      dispatch({ type: 'user/getUserInfo' });
    }
  }

  goBack = () => {
    window.history.back();
  }

  login = () => {
    // const { dispatch } = this.props;
    // dispatch({ type: 'user/login' });
    Router.push('/login');
  }

  render() {
    const { classes, userInfo = {} } = this.props;
    const { theme, anchorEl } = this.state;
    console.log(theme);
    return (
      <Headroom
        style={{
          height: 64,
        }}
        onUnpin={() => {
          this.setState({
            theme: 'white',
          });
        }}
        onUnfix={() => {
          this.setState({
            theme: 'black',
          });
        }}
      >
        <div className={classes.root}>
          <AppBar
            position="static"
          // color={theme === 'black' ? 'primary' : 'default'}
          >
            <Toolbar className={classes.toolbar} style={{ height: 64 }}>
              <IconButton
                className={classes.menuButton}
                color="contrast"
                aria-label="Menu"
                onClick={() => { Router.push('/'); }}
              >
                <img className={classes.logo} src="/static/logo.svg" alt="" />
              </IconButton>

              <div className={classes.center}>
                <Hidden only={['sm', 'xs']}>
                  <div className={classes.navList}>
                    <Button onClick={() => { Router.push('/'); }} className={classes.nav} color="contrast">首页</Button>
                    <Button onClick={() => { Router.push('/article'); }} className={classes.nav} color="contrast">文章</Button>
                    <Button onClick={() => { Router.push('/say'); }} className={classes.nav} color="contrast">话题</Button>
                    <Button onClick={() => { Router.push('/explore'); }} className={classes.nav} color="contrast">发现</Button>
                  </div>
                  <Search />
                </Hidden>
              </div>

              <div className={classes.right}>
                <User />
              </div>

            </Toolbar>

          </AppBar>
        </div>
      </Headroom>
    );
  }
}

