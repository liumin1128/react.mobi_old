import React from 'react'
import dynamic from 'next/dynamic'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import ButtonBase from '@material-ui/core/ButtonBase'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import ViewModuleIcon from '@material-ui/icons/ViewModule'
import Hidden from '@material-ui/core/Hidden'
import Link from '@/components/Link'
import Popper from '@/components/Popper'
import { LOGO_URL, NAV_TABS } from '@/config/base'
import { useTheme } from '@/hoc/theme'
import useElevationScroll from '@/hooks/useElevationScroll'
import NavTabs from './NavTabs'

// const DynamicUserInfoWithNoSSR = dynamic(() => import("./user"), {
//   ssr: false,
//   loading: () => <span />
// });

const useStyles = makeStyles(theme => ({
  root: {
    height: 64,
    //   [theme.breakpoints.down('xs')]: {
    //     height: 56,
    //   },
  },
  logo: {
    marginRight: 16,
    // filter: 'grayscale(100%) saturate(100%)',
  },
}))

function Header(props) {
  const classes = useStyles()
  const elevation = useElevationScroll({ elevation: 2 })
  const { setTheme } = useTheme()

  return (
    <div className={classes.root}>
      <AppBar elevation={elevation} className={classes.root}>
        <Toolbar>
          {/* <Link href="/">
            <ButtonBase centerRipple className={classes.logo}>
              <Avatar src={LOGO_URL} />
            </ButtonBase>
          </Link> */}
          <Box flexGrow={1} className={classes.grow}>
            <Hidden implementation='css' smUp>
              <Popper
                content={
                  <Paper>
                    <Box>
                      <NavTabs navList={NAV_TABS} />
                    </Box>
                  </Paper>
                }
              >
                <IconButton color='inherit'>
                  <ViewModuleIcon />
                </IconButton>
              </Popper>
            </Hidden>
            <Hidden implementation='css' smDown>
              <NavTabs navList={NAV_TABS} />
            </Hidden>
          </Box>
          <IconButton color='inherit' onClick={setTheme}>
            <ColorLensIcon />
          </IconButton>
          {/* <DynamicUserInfoWithNoSSR /> */}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
