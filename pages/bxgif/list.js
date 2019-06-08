import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Content from '@/container/bxgif/list';

function Index() {
  return (
    <Container maxWidth="md">
      <Box my={2}>
        <Content />
      </Box>
    </Container>
  );
}

export default Index;
