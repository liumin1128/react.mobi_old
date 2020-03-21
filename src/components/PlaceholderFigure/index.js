import React from 'react'
import PropTypes from 'prop-types'
import pp from '@/hoc/pp'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import images from './images.json'

function PlaceholderFigure({ image, title, content, action }) {
  const classes = useStyles()
  return (
    <>
      <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
        <Box maxWidth={600} maxHeight={600} py={12} className={classes.root}>
          <img alt={title} className={classes.image} src={images[image]} />
        </Box>
        <Typography gutterBottom className={classes.title} align='center' variant='h6'>
          {title}
        </Typography>
        <Typography gutterBottom className={classes.content} align='center' variant='body2'>
          {content}
        </Typography>
        <Box mt={2} />
        {action}
      </Box>
    </>
  )
}

PlaceholderFigure.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  content: PropTypes.string,
  action: PropTypes.node,
}

PlaceholderFigure.defaultProps = {
  title: '',
  image: 'welcome',
  content: '',
  action: null,
}

const Empty = pp(PlaceholderFigure, {
  image: 'empty',
  title: '这里什么都没有',
  content: '找不到想要给你看的东西啦，我会继续加油的，等会儿再来看看吧',
})

const Error = pp(PlaceholderFigure, {
  image: 'server_down',
  title: 'NETWORK ERROR',
  content: '网络链接错误',
})

const Error404 = pp(PlaceholderFigure, {
  image: '404',
  title: '404',
  content: '该页面消失了',
  action: (
    <>
      <a href='/'>回到首页</a>
    </>
  ),
})

const Error500 = pp(PlaceholderFigure, {
  image: 'server_down',
  title: 'NETWORK ERROR',
  content: '啊哦，出现了意料之外的错误',
  action: (
    <>
      <a href='/'>回到首页</a>
    </>
  ),
})

PlaceholderFigure.Error404 = Error404
PlaceholderFigure.Error500 = Error500
PlaceholderFigure.Error = Error
PlaceholderFigure.Empty = Empty

export default PlaceholderFigure
