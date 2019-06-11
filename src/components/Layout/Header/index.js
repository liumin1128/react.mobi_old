import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ColorLensIcon from '@material-ui/icons/ColorLens';

import Link from '@/components/Link';
import { LOGO_URL, NAV_TABS } from '@/config/base';
import { withThemeConsumer } from '@/hoc/theme';
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
    filter: 'grayscale(100%) saturate(100%)',
  },
});

@withThemeConsumer
@withStyles(styles)
export default class Header extends PureComponent {
  render() {
    const { classes, setTheme } = this.props;
    return (
      <div className={classes.root}>
        <AppBar className={classes.root}>
          <Toolbar>
            <Link href="/">
              <ButtonBase centerRipple className={classes.logo}>
                <Avatar src={LOGO_URL} />
              </ButtonBase>
            </Link>
            <Box flexGrow={1} className={classes.grow}>
              <NavTabs navList={NAV_TABS} />
            </Box>
            <IconButton color="inherit" onClick={setTheme}>
              <ColorLensIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
