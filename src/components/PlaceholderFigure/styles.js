import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  image: {
    width: '100%',
    height: '100%',
    maxWidth: 365,
  },
  title: {
    color: '#666',
  },
  content: {
    color: '#999',
  },
}))

export default useStyles
