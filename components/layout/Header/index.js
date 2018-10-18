import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import Tabs from './tabs';


const DynamicUserInfoWithNoSSR = dynamic(() => import('./user'), {
  ssr: false,
});

const styles = theme => ({
  root: {
    background: '#fff',
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
    const { classes } = this.props;
    return (
      <div className={classes.root}>

        <AppBar>
          <div className={classes.container}>
            <Toolbar disableGutters>
              <Hidden className={`${classes.grow}`} implementation="css" only={['sm', 'xs']}>
                <Tabs />
              </Hidden>

              <DynamicUserInfoWithNoSSR />
            </Toolbar>
          </div>
        </AppBar>
      </div>
    );
  }
}
