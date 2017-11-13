import React, { PureComponent } from 'react';

import Container from './container';
import Main from './main';
import Sider from './sider';
import Head from '../head';
import Toast from '../toast';
import Register from '../login/register';

import { Router } from '../../utils';

Router.onRouteChangeStart = (url) => {
  console.log('App is changing to: ', url);
};

export default class extends PureComponent {
  render() {
    const { children } = this.props;
    return (<div>
      <Head />
      <Container>
        <Main>{ children }</Main>
        <Sider />
      </Container>
      <Toast />
      <Register />
    </div>);
  }
}
