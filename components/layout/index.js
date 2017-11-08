import React, { PureComponent } from 'react';

import Container from './container';
import Main from './main';
import Sider from './sider';

export default class extends PureComponent {
  render() {
    const { children } = this.props;
    return (<div>
      <Container>
        <Main>{ children }</Main>
        <Sider />
      </Container>
    </div>);
  }
}
