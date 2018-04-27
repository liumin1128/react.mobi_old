import React, { PureComponent } from 'react';
import Button from 'material-ui/Button';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Login from '../../view/login';
import { modalConsumer } from '../../hoc/widthModal';
import { getStorage } from '../../utils/store';
import { STORE_USER_KEY } from '../../constants/base';

@modalConsumer
export default class UserAvatar extends PureComponent {
  render() {
    console.log('-------------------------------');
    const { modal } = this.props;
    const { token, userInfo = {} } = getStorage(STORE_USER_KEY) || {};
    if (!token) {
      return (<Button
        color="inherit"
        onClick={() => { modal(Login); }}
      >Login</Button>);
    }
    return (<IconButton
      // className={classes.logoButton}
      color="inherit"
      aria-label="Menu"
    >
      <Avatar
        // className={classes.logo}
        src={userInfo.avatarUrl}
      />
    </IconButton>);
  }
}
