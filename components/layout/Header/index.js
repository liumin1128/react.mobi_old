import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Headroom from 'react-headroom';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Tabs from './tabs';

const styles = theme => ({
  root: {
    background: '#fff',
  },
  grow: {
    flexGrow: 1,
  },
  container: theme.container,
  toolbar: {
    padding: 0,
  },
});

@withStyles(styles)
export default class Header extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Headroom>
        <div className={classes.root}>
          <div className={classes.container}>
            <Toolbar className={classes.toolbar}>
              <Hidden className={`${classes.grow}`} implementation="css" only={['sm', 'xs']}>
                <Tabs />
              </Hidden>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </div>
        </div>
      </Headroom>

    );
  }
}
