import React, { PureComponent } from 'react';
import { reduxPage } from '../../store';
import { User } from '../../components';

class Index extends PureComponent {
  componentWillMount() {
    this.props.dispatch({
      type: 'user/getUserInfo',
    });
  }
  render() {
    return (
      <div>
        <h1>m3</h1>
        <User />
      </div>
    );
  }
}

export default reduxPage(Index);

