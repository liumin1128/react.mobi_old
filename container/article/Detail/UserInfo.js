import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Link from '@/components/Link';
import Avatar from './Avatar';

const styles = theme => ({
  action: {
    margin: 0,
  },
});

export default withStyles(styles)(({ user, classes }) => (
  <CardHeader
    classes={{ action: classes.action }}
    avatar={<Avatar user={user} />}
    action={<Button variant="contained" color="primary">关注</Button>}
    title={<Typography variant="h6" style={{ fontSize: 18 }}>{user.nickname}</Typography>}
    subheader={'react 前端'}
  />
));
