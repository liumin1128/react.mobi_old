import React, { PureComponent } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from '@/components/Layout/Header';
import Content from '@/container/News/List';

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
