import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
});

export default withStyles(styles)(({ user, classes }) => (
  <Avatar
    aria-label="Recipe"
    className={classes.avatar}
    src={user.avatarUrl}
    style={{ background: 'rgba(0,0,0,0.1)' }}
  >
    {user.nickname}
  </Avatar>
));
