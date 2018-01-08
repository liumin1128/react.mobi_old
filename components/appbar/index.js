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
};

@connect(({ user }) => ({
  user,
}))
@withStyles(styles)
export default class extends PureComponent {
  state = {
    theme: 'black',
  };

  componentWillMount() {
    const { dispatch } = this.props;
    const { router } = Router;
    if (router && router.query && router.query.token) {
      console.log(router.query.token);
      dispatch({ type: 'user/getUserInfo', payload: { token: router.query.token } });
    } else {
      dispatch({ type: 'user/restore' });
    }
  }

  goBack = () => {
    window.history.back();
  }

  login = () => {
    const { dispatch } = this.props;
    dispatch({ type: 'user/login' });
  }

  render() {
    const { classes, user = {} } = this.props;
    const { theme } = this.state;
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
                onClick={this.goBack}
              >
                <img className={classes.logo} src="/static/logo.svg" alt="" />
              </IconButton>

              <Hidden only={['sm', 'xs']}>
                <div className={classes.navList}>
                  <Button className={classes.nav} color="contrast">首页</Button>
                  <Button className={classes.nav} color="contrast">文章</Button>
                  <Button className={classes.nav} color="contrast">话题</Button>
                  <Button className={classes.nav} color="contrast">发现</Button>
                </div>
                <Input
                  id="adornment-password"
                  color="contrast"
                  // type="search"
                  disableUnderline
                  classes={{
                    root: classes.textFieldRoot,
                    input: classes.textFieldInput,
                    focused: classes.textFieldFocused, // className, e.g. `OverridesClasses-root-X`
                  }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton className={classes.search} color="contrast">
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </Hidden>

              {user._id
                ? <IconButton
                  // className={classes.menuButton}
                  color="contrast"
                  aria-label="Menu"
                >
                  <Avatar alt="Adelle Charles" src={user.avatarUrl} />
                </IconButton>
                : <Button onClick={this.login} color="contrast">Login</Button>
              }
            </Toolbar>

          </AppBar>
        </div>
      </Headroom>
    );
  }
}

