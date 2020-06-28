import React from 'react'
import pp from '@/hoc/pp'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'

const images = {
  welcome: '/images/undraw/undraw_welcome_cats_thqn.svg',
  on_the_way: '/images/undraw/undraw_on_the_way_ldaq.svg',
  '404': '/images/undraw/undraw_page_not_found_su7k.svg',
  people: '/images/undraw/undraw_people_tax5.svg',
  react: '/images/undraw/undraw_react_y7wq.svg',
  server_down: '/images/undraw/undraw_server_down_s4lk.svg',
  feeling_blue: '/images/undraw/undraw_feeling_blue_4b7q.svg',
  empty: '/images/undraw/undraw_empty_xct9.svg',
}

interface Props {
  image: ImageName
  title: string
  content: string
  action: React.ReactNode
}

type ImageName =
  | 'welcome'
  | 'on_the_way'
  | '404'
  | 'people'
  | 'react'
  | 'server_down'
  | 'feeling_blue'
  | 'empty'

function PlaceholderFigure({ image, title, content, action }: Props) {
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
