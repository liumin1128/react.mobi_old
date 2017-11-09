import React, { PureComponent } from 'react';

import Container from './container';
import Main from './main';
import Sider from './sider';
import Head from '../head';
import Nav from '../navigation';

export default class extends PureComponent {
  render() {
    const { children } = this.props;
    return (<div>
      <Head />
      <Container>
        <Main>{ children }</Main>
        <Sider />
      </Container>
      <Nav />
    </div>);
  }
}
