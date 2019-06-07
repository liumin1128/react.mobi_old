
import React, { PureComponent, Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '@/components/ProTip';
import Link from '@/components/Link';
import Header from '@/components/Layout/Header';


class Index extends PureComponent {
  render() {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js v4-beta example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
        </Box>
      </Container>
    );
  }
}

Index.Header = Header;

export default Index;
