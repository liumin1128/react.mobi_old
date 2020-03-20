import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  a: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));
