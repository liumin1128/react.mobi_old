
import React, { PureComponent } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '@/components/ProTip';
import Link from '@/components/Link';
import { withThemeConsumer } from '@/hoc/theme';


class Index extends PureComponent {
  render() {
    const { setTheme, theme } = this.props;
    return (
      <Container maxWidth="sm">
        <h1>{theme.color}</h1>
        <Button onClick={setTheme}>switch theme</Button>
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

export default withThemeConsumer(Index);
