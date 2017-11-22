import React, { PureComponent } from 'react';
import { reduxMainPage } from '../../store';
import Nvigation from '../../components/navigation';
import User from '../../components/user';

class Index extends PureComponent {
  componentWillMount() {
    console.log('this.props');
    console.log(this.props);
    const { dispatch } = this.props;
    dispatch({
      type: 'user/requireAuth',
    });
  }
  render() {
    return (
      <div>
        <User />
        <Nvigation />
      </div>
    );
  }
}

export default reduxMainPage(Index);

