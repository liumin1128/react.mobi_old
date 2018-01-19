import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = {
  loged: {
    display: 'flex',
    alignItems: 'center',
  },
  menu: {
    minWidth: 200,
  },
  icon: {
    marginRight: 0,
  },
  userInfo: {
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minWidth: 160,
    height: 70,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  nickname: {
    fontSize: 16,
  },
};

@connect(({ user }) => ({ userInfo: user.userInfo }))
@withStyles(styles)
export default class extends PureComponent {
  state = {
    anchorEl: null,
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
  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  goBack = () => {
    window.history.back();
  }
  login = () => {
    Router.push('/login');
  }
  render() {
    const { classes, userInfo = {} } = this.props;
    const { anchorEl } = this.state;
    return (
      <div>
        {userInfo._id
          ? <div className={classes.loged}>
            <Button
              raised
              color="accent"
              onClick={() => { Router.push('/post'); }}
            >写文章</Button>
            <IconButton
              color="contrast"
              aria-label="Menu"
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <Avatar alt="Adelle Charles" src={userInfo.avatarUrl} />
            </IconButton>

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
            >
              <MenuItem className={classes.userInfo} onClick={this.handleClose}>
                <Avatar src={userInfo.avatarUrl} />
                <h1 className={classes.nickname}>{userInfo.nickname}</h1>
              </MenuItem>
              <MenuItem disabled onClick={this.handleClose}>个人资料</MenuItem>
              <MenuItem disabled onClick={this.handleClose}>我关注的</MenuItem>
              <MenuItem disabled onClick={this.handleClose}>火炬</MenuItem>
              <MenuItem disabled onClick={this.handleClose}>设置和隐私</MenuItem>
              <MenuItem disabled onClick={this.handleClose}>帮助中心</MenuItem>
              <MenuItem onClick={this.handleClose}>登出</MenuItem>
            </Menu>
          </div>
          : <Button onClick={this.login} color="contrast">登录/注册</Button>
        }
      </div>
    );
  }
}

