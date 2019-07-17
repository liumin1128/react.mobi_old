import React, { Fragment } from 'react';
// import Link from 'next/link';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withRouter } from 'next/router';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const list = [
  {
    done: false,
    title: '用户中心',
    sublist: [
      { done: false, title: '用户信息展示' },
      { done: false, title: 'ta的动态' },
      { done: false, title: '用户信息设置' },
      { done: false, title: '用户中心' },
      { done: false, title: '用户中心' },
    ],
  },
];

function Home({ router }) {
  console.log('router');
  console.log(router);
  return (
    <div>
      <Card>
        <Box p={2}>
          <Typography variant="h6" gutterBottom>开发计划</Typography>
          <Typography variant="body1" gutterBottom>开发计划</Typography>
          <FormControlLabel
            control={<Checkbox checked value="gilad" />}
            label="Gilad Gray"
          />
        </Box>
      </Card>
    </div>
  );
}

export default withRouter(Home);
