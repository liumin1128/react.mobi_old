import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';

import Link from '@/components/Link';
import { LOGO_URL, NAV_TABS } from '@/config/base';

import NavTabs from './NavTabs';
// import Logo from './logo';

// const DynamicUserInfoWithNoSSR = dynamic(() => import('./user'), {
//   ssr: false,
//   loading: () => <span />,
// });

const styles = theme => ({
  root: {
    height: 64,
    [theme.breakpoints.down('xs')]: {
      height: 56,
    },
  },
  logo: {
    marginRight: 16,
  },
});

@withStyles(styles)
export default class Header extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.root}>
          <Toolbar>
            <ButtonBase centerRipple className={classes.logo}>
              <Avatar src={LOGO_URL} />
            </ButtonBase>
            <div className={classes.grow}>
              <NavTabs navList={NAV_TABS} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
