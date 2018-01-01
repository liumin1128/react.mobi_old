import React, { PureComponent } from 'react';
import Headroom from 'react-headrooms';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = {
  root: {
    width: '100%',
    height: 64,
    zIndex: 999,
    position: 'fixed',
    top: 0,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appbar: {
    boxShadow: 'none',
  },
};

@withStyles(styles)
export default class extends PureComponent {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <Headroom
        tolerance={5}
        offset={200}
        classes={{
          initial: 'animated',
          pinned: 'fadeInDown',
          unpinned: 'fadeOutUp',
        }}
      >
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar style={{ height: 64 }}>
              <IconButton
                className={classes.menuButton}
                color="contrast"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                type="title"
                color="inherit"
                className={classes.flex}
              >
                华人生活网
              </Typography>
              {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="contrast"
                >
                  <AccountCircle style={{ fontSize: 40 }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>
              </div>
            )}
            </Toolbar>
          </AppBar>
        </div>
      </Headroom>
    );
  }
}

