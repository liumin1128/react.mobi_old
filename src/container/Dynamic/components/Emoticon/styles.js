import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  box: {
    maxWidth: theme.spacing(36),
    height: theme.spacing(24),
  },
  item: {
    margin: 0,
    padding: 0,
    width: theme.spacing(6),
    height: theme.spacing(6),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // border: '1px transparent solid',
    '&:hover': {
      // border: '1px red solid',
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  },
  tab: {
    minWidth: 'auto',
    // padding: 0,

    // border: '1px red solid',
    '& figure': {
      margin: 0,
      padding: 0,
      width: theme.spacing(4),
      height: theme.spacing(4),
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      border: '1px transparent solid',
    },
  },
}));
