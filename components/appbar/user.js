import React, { PureComponent } from 'react';
import Button from 'material-ui/Button';
import Login from '../../view/login';
import { modalConsumer } from '../../hoc/widthModal';
import { getStorage } from '../../utils/store';
import { USER_INFO_KEY } from '../../constants/base';

@modalConsumer
export default class UserAvatar extends PureComponent {
  render() {
    const { modal } = this.props;
    const userInfo = getStorage(USER_INFO_KEY);
    console.log('userInfo');
    console.log(userInfo);

    return (<Button
      color="inherit"
      onClick={() => {
      // modal(Test, this.container);
      modal(Login);
    }}
    >Login</Button>);
  }
}
