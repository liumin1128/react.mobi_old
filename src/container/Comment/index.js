import React from 'react';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import nossr from '@/hoc/nossr';
import Create from './Create';
import List from './List';

export default nossr(({ _id }) => (
  <Card>
    <Box px={4} py={3}>
      <Create session={_id} />
    </Box>
    <Divider />
    <Box px={4} py={3}>
      <List session={_id} />
    </Box>
  </Card>
));
