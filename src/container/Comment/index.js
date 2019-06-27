import React from 'react';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import CardContent from '@material-ui/core/CardContent';
import Create from './Create';
import List from './List';

export default ({ _id }) => (
  <Card>
    <CardContent>
      <Create commentTo={_id} type="comment" />
    </CardContent>
    <Divider />
    <CardContent>
      <List _id={_id} />
    </CardContent>
  </Card>
);
