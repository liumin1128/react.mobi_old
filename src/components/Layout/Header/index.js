import React, { PureComponent } from 'react';
import dynamic from 'next/dynamic';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import ButtonBase from '@material-ui/core/ButtonBase';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import Hidden from '@material-ui/core/Hidden';
import Link from '@/components/Link';
import Popper from '@/components/Popper';
import { LOGO_URL, NAV_TABS } from '@/config/base';
import { withThemeConsumer } from '@/hoc/theme';
import NavTabs from './NavTabs';
// import Logo from './logo';

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
  logo: {
    marginRight: 16,
    // filter: 'grayscale(100%) saturate(100%)',
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
              <Hidden implementation="css" smUp>
                <Popper content={(<Paper><Box><NavTabs navList={NAV_TABS} /></Box></Paper>)}>
                  <IconButton color="inherit">
                    <ViewModuleIcon />
                  </IconButton>
                </Popper>
              </Hidden>
              <Hidden implementation="css" smDown>
                <NavTabs navList={NAV_TABS} />
              </Hidden>
            </Box>
            <IconButton color="inherit" onClick={setTheme}>
              <ColorLensIcon />
            </IconButton>
            <DynamicUserInfoWithNoSSR />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
