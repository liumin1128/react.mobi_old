import React, { PureComponent } from 'react';
import Container from '@material-ui/core/Container';
import Header from '@/components/Layout/Header';
import Content from '@/container/News/Detail';


class Index extends PureComponent {
  render() {
    return (
      <Container maxWidth="md">
        <Content />
      </Container>
    );
  }
}

Index.Header = Header;

export default Index;
