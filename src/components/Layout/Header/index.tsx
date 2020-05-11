import React from 'react'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@/hoc/theme'
import useElevationScroll from '@/hooks/useElevationScroll'

const useStyles = makeStyles(() => ({
  root: {
    height: 64,
  },
  logo: {
    marginRight: 16,
  },
}))

function Header() {
  const classes = useStyles()
  const elevation = useElevationScroll({ elevation: 2 })
  const { setTheme } = useTheme()

  return (
    <div className={classes.root}>
      <AppBar elevation={elevation} className={classes.root}>
        <Toolbar>
          <Box flexGrow={1}>Header</Box>
          <IconButton color='inherit' onClick={setTheme}>
            <ColorLensIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
