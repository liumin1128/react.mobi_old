import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
// import Hidden from '@material-ui/core/Hidden';
import Tabs from './tabs';


const DynamicUserInfoWithNoSSR = dynamic(() => import('./user'), {
  ssr: false,
  loading: () => <span />,
});

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
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.root}>
          <div className={classes.container}>
            <Toolbar disableGutters>
              <div className={classes.grow}>
                <Tabs />
              </div>
              <DynamicUserInfoWithNoSSR />
            </Toolbar>
          </div>
        </AppBar>
      </div>
    );
  }
}
