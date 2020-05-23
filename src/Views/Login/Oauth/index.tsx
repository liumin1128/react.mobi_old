import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Box from '@material-ui/core/Box'
import useStyles from './styles'
import ouathList from './ouathList'

function Oauth() {
  const classes = useStyles()

  function handleClick(url: string) {
    window.location.href = url
  }

  return (
    <>
      <div className={classes.root}>
        <div className={classes.orLine}>
          <span>或使用第三方账号登陆</span>
        </div>
        <Box display='flex' justifyContent='center'>
          {ouathList.map(i => (
            <IconButton onClick={() => handleClick(i.url)} className={classes.button} key={i.url}>
              <img className={classes.icon} alt='' src={i.icon} />
            </IconButton>
          ))}
        </Box>
      </div>
    </>
  )
}

export default Oauth
