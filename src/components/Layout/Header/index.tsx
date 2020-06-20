import React from 'react'
import Box from '@material-ui/core/Box'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import ColorLensIcon from '@material-ui/icons/ColorLens'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@/hoc/theme'
import useElevationScroll from '@/hooks/useElevationScroll'
import modal from '@/hoc/modal'
// import { domRender } from '@/utils/react'
// import ReactDOM from 'react-dom'

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

  function handleLogin() {
    modal(() => <>1111</>)
    // domRender(() => <>1111</>)
  }

  return (
    <div className={classes.root}>
      <AppBar elevation={elevation} className={classes.root}>
        <Toolbar>
          <Box flexGrow={1}>Header</Box>
          <Button onClick={handleLogin} color='inherit'>
            Login
          </Button>
          <IconButton color='inherit' onClick={setTheme}>
            <ColorLensIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
