import React, { PureComponent } from 'react';
import { reduxPage } from '../../store';
import Create from '../../components/say/create';
import Head from '../../components/head';
import Toast from '../../components/toast';

class Index extends PureComponent {
  render() {
    return (
      <div>
        <Head />
        <Toast />
        <h1>444</h1>
        <Create />
      </div>
    );
  }
}

export default reduxPage(Index);

