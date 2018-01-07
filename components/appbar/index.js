import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import Router from 'next/router';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';

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
    // Router.push('/');
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
            <Toolbar style={{ height: 64 }}>
              <IconButton
                className={classes.menuButton}
                color="contrast"
                aria-label="Menu"
                onClick={this.goBack}
              >
                <img className={classes.logo} src="/static/logo.svg" alt="" />
              </IconButton>
              <Typography
                type="title"
                color="inherit"
                className={classes.flex}
              >
                盗火
              </Typography>
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

