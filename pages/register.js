import React, { PureComponent } from 'react';
import Register from '../components/login/register';
import { reduxMainPage } from '../store';

class Index extends PureComponent {
  render() {
    return (
      <div>
        <Register />
      </div>
    );
  }
}

export default reduxMainPage(Index);

