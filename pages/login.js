import React, { PureComponent } from 'react';
import Login from '../components/login';
import { reduxMainPage } from '../store';

class Index extends PureComponent {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}

export default reduxMainPage(Index);

