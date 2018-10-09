import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
  root: {
    background: '#fff',
  },
  grow: {
    flexGrow: 1,
  },
  container: theme.container,
});

@withStyles(styles)
export default class Header extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.grow}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </div>
      </div>
    );
  }
}
