import React, { PureComponent } from 'react';
import { reduxMainPage } from '../../store';
import { User } from '../../components';

class Index extends PureComponent {
  render() {
    return (
      <div>
        <User />
      </div>
    );
  }
}

export default reduxMainPage(Index);

