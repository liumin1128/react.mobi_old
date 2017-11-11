import React, { PureComponent } from 'react';
import { reduxMainPage } from '../../store';
import { User, Nvigation } from '../../components';

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

