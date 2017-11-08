import React, { PureComponent } from 'react';

import Container from './container';
import Main from './main';
import Sider from './sider';
import Head from '../head';

export default class extends PureComponent {
  render() {
    const { children } = this.props;
    return (<div>
      <Head />
      <Container>
        <Main>{ children }</Main>
        <Sider />
      </Container>
    </div>);
  }
}
