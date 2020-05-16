import { createStyles } from '@material-ui/core/styles'

export default () =>
  createStyles({
    root: {
      // backgroundColor: theme.palette.primary.main,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  })
