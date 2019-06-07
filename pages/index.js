
import React, { PureComponent, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '@/components/ProTip';
import Link from '@/components/Link';
import Header from '@/components/Layout/Header';
import Content from '@/container/News/List';


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
