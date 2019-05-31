import React, { PureComponent } from 'react';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Logo from './logo';

const styles = theme => ({
  root: {
    height: 64,
  },
  grow: {
    flexGrow: 1,
  },
  container: theme.container,
});

@withStyles(styles)
export default class Header extends PureComponent {
  render() {
    const { classes, title } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.root}>
          <div className={classes.container}>
            <Toolbar disableGutters>
              <Link href="/">
                <a><Logo /></a>
              </Link>
              <Typography
                variant="h6"
                color="inherit"
                className={classes.grow}
              >
                {title}
              </Typography>
            </Toolbar>
          </div>
        </AppBar>
      </div>
    );
  }
}
