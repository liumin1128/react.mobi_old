import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: 64,
  },
  orLine: {
    textAlign: 'center',
    position: 'relative',
    color: '#d8d8d8',
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&>span': {
      margin: theme.spacing(1),
    },
    '&::before, &::after': {
      flex: 1,
      content: "''",
      height: 1,
      display: 'block',
      background: '#d8d8d8',
    },
  },
  icon: {
    // filter: 'Gray',
    // '-webkit-filter': 'grayscale(100%)',
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  button: {
    padding: theme.spacing(2),
    margin: '0 4px',
    backgroundColor: 'rgba(0,0,0,0.05)',
    '&:hover': {
      backgroundColor: 'rgba(0,0,0,0.05)',
    },
    '&:active': {
      boxShadow: 'none',
      borderColor: 'rgba(0,0,0,0.05)',
    },
    // '&:focus': {
    //   boxShadow: `0 0 0 0.2rem ${theme.palette.primary.light}`,
    // },
  },
}))

export default useStyles
