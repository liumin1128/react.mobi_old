import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';

import NavTabs from '@/components/NavTabs';
import Link from '@/components/Link';
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
  grow: {
    flexGrow: 1,
  },
  indicator: {
    backgroundColor: '#ffffff',
  },
});

const navList = [
  { pathname: '/', label: '首页' },
  { pathname: '/about', label: '关于' },
];

@withStyles(styles)
export default class Header extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.root}>
          <Toolbar>
            <Link href="/">
              <ButtonBase centerRipple className={classes.logo}>
                <Avatar src="https://imgs.react.mobi/FldU5XAVJksEDNDEs7MZiF36DMAz" />
              </ButtonBase>
            </Link>
            <div className={classes.grow}>
              <NavTabs navList={navList} />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
