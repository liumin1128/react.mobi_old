import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Side from '@/container/Side';

function Layout({ children }) {
  console.log('xxxx');
  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={8}>
            {children}
          </Grid>
          {/* <Grid item xs={12} sm={12} md={4}>
            <Hidden implementation="css" only={[ 'sm', 'xs' ]}>
              <Side />
            </Hidden>
          </Grid> */}
        </Grid>
      </Box>
    </Container>
  );
}

export default Layout;
