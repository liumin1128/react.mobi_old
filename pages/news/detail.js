import React, { PureComponent } from 'react';
import Container from '@material-ui/core/Container';
import Header from '@/components/Layout/Header';
import Content from '@/container/News/Detail';
import Box from '@material-ui/core/Box';


class Index extends PureComponent {
  render() {
    return (
      <Container maxWidth="md">
        <Box my={2}>
          <Content />
        </Box>
      </Container>
    );
  }
}

Index.Header = Header;

export default Index;
