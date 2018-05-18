import React, { PureComponent, Fragment } from 'react';
import Button from ’@material-ui/coreButton';
import Avatar from ’@material-ui/coreAvatar';
import IconButton from ’@material-ui/coreIconButton';
import Menu, { MenuItem } from ’@material-ui/coreMenu';
import Login from '../../view/login';
import { modalConsumer } from '../../hoc/widthModal';
import { getStorage, clearStorage, removeStorage } from '../../utils/store';
import { STORE_USER_KEY } from '../../constants/base';
import { isServerSide } from '../../utils/common';
import nossr from '../../hoc/nossr';


@nossr
@modalConsumer
export default class UserAvatar extends PureComponent {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  logout = () => {
    removeStorage(STORE_USER_KEY);
    this.handleClose();
  }

  render() {
    if (isServerSide()) {
      return (<Button
        color="inherit"
      >Login</Button>);
    }
    console.log('-------------------------------');
    const { modal } = this.props;
    const { token, userInfo = {} } = getStorage(STORE_USER_KEY) || {};
    if (!token) {
      return (<Button
        color="inherit"
        onClick={() => { modal(Login); }}
      >Login</Button>);
    }
    const { anchorEl } = this.state;
    return (<Fragment>
      <IconButton
      // className={classes.logoButton}
        color="inherit"
        aria-label="Menu"
        // color="contrast"
        aria-owns={anchorEl ? 'simple-menu' : null}
        aria-haspopup="true"
        onClick={this.handleClick}
      >
        <Avatar
        // className={classes.logo}
          src={userInfo.avatarUrl}
        />
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
        {
        // <MenuItem
        // // className={classes.userInfo}
        //   onClick={this.handleClose}
        // >
        //   <Avatar src={userInfo.avatarUrl} />
        //   <h1 >{userInfo.nickname}</h1>
        // </MenuItem>
       }
        <MenuItem disabled onClick={this.handleClose}>个人资料</MenuItem>
        <MenuItem disabled onClick={this.handleClose}>我关注的</MenuItem>
        <MenuItem disabled onClick={this.handleClose}>火炬</MenuItem>
        <MenuItem disabled onClick={this.handleClose}>设置和隐私</MenuItem>
        <MenuItem disabled onClick={this.handleClose}>帮助中心</MenuItem>
        <MenuItem onClick={this.logout}>登出</MenuItem>
      </Menu>
    </Fragment>);
  }
}
