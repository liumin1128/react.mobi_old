import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
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
      height: 56,
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
      <div className={classes.root}>
        <AppBar
          // position="static"
          className={classes.root}
        >
          <Toolbar>
            <Link href="/">
              <a><Logo /></a>
            </Link>
            <div className={classes.grow}>
              <NavTabs />
            </div>
            <DynamicUserInfoWithNoSSR />
          </Toolbar>
          {
          //   <Hidden implementation="css" smUp>
          //   <Affix>
          //     <div style={{ background: '#00bcd4' }}>
          //       <NavTabs />
          //     </div>
          //   </Affix>
          // </Hidden>
          }
        </AppBar>
      </div>
    );
  }
}
