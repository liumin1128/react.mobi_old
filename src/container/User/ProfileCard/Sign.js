import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Link from '@/components/Link';


function Sign() {
  return (
    <Card>
      <Box height={158} p={2} display="flex" justifyContent="center" alignItems="center">
        <Link href="/login/register"><Button color="primary" variant="outlined">注册</Button></Link>
        <Box ml={1} />
        <Link href="/login"><Button color="primary" variant="contained">登录</Button></Link>
      </Box>
    </Card>
  );
}

export default Sign;
