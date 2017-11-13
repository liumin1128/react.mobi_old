import React, { PureComponent } from 'react';
import { dynamic } from '../../utils';
import Container from './container';
import Main from './main';
import Sider from './sider';
import Head from '../head';
import Toast from '../toast';

const DynamicLogin = dynamic(import('../modal/login'));

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
      <DynamicLogin />
    </div>);
  }
}
