import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Hidden from 'material-ui/Hidden';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Headroom from 'react-headroom';
import Search from './search';
import Tabs from './tabs';

const styles = theme => ({
  root: {
    height: 64,
    width: '100%',
    marginBottom: theme.spacing.unit * 3,
  },
  container: theme.container,
  toolbar: {
    padding: 0,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 0,
    '&>img': {
      width: 'auto',
    },
  },
  flex: {
    flex: 1,
  },
  logoButton: {
    marginRight: 20,
  },
  nav: {
    fontSize: 16,
    height: 64,
  },
});

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <Headroom
      className={classes.root}
      // onUnpin={() => {
      // }}
      // onUnfix={() => {
      // }}
    >
      <AppBar position="static">
        <div className={classes.container}>
          <Toolbar className={classes.toolbar}>
            <Link href="/">
              <IconButton className={classes.logoButton} color="inherit" aria-label="Menu">
                <Avatar className={classes.logo} src="/static/logo.svg" />
              </IconButton>
            </Link>
            <Hidden className={`${classes.flex}`} implementation="css" only={['sm', 'xs']}>
              <Tabs />
            </Hidden>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </div>
      </AppBar>
    </Headroom>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
