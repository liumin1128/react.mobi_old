import React, { PureComponent } from 'react';
import { reduxMainPage } from '../../store';
import { Nvigation } from '../../components';
import User from '../../components/user';

class Index extends PureComponent {
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

