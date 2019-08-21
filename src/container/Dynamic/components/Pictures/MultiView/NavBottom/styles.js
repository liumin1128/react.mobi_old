import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    maxWidth: theme.spacing(100),
  },
  item: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    // borderRadius: theme.spacing(0.5),
    margin: theme.spacing(0.25),
    display: 'block',
    opacity: 0.5,
    '&:hover': {
      cursor: 'pointer', // zoom-out;
    },
  },
  current: {
    opacity: 1,
    border: `1px ${theme.palette.primary.main } solid`,
  }
}));
