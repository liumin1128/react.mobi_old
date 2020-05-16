import { makeStyles } from '@material-ui/core/styles'

export default makeStyles(theme => ({
  item: {
    marginBottom: theme.spacing(3),
  },
  button: {
    height: theme.spacing(6),
    borderRadius: theme.spacing(0.5),
    boxShadow: '0 8px 30px rgba(0,0,0,0.1)',
  },
}))
