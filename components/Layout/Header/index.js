import React, { PureComponent, Fragment } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Headroom from 'react-headroom';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import NavTabs from './NavTabs';
import Logo from './logo';


const DynamicUserInfoWithNoSSR = dynamic(() => import('./user'), {
  ssr: false,
  loading: () => <span />,
});

const styles = theme => ({
  root: {
    height: 64,
    [theme.breakpoints.down('xs')]: {
      height: 64 + 40,
    },
  },
  grow: {
    flexGrow: 1,
  },
  indicator: {
    backgroundColor: '#ffffff',
  },
});

@withStyles(styles)
export default class Header extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Headroom style={{ height: 64 }}>
          <AppBar position="static" className={classes.root}>
            <Toolbar>
              <Link href="/">
                <a><Logo /></a>
              </Link>
              <div className={classes.grow}>
                <Hidden implementation="css" xsDown>
                  <NavTabs mode="large" />
                </Hidden>
              </div>
              <DynamicUserInfoWithNoSSR />
            </Toolbar>
            <Hidden implementation="css" smUp>
              <NavTabs />
            </Hidden>
          </AppBar>
        </Headroom>
      </Fragment>
    );
  }
}
