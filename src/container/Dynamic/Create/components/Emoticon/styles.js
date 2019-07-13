import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  box: {
    maxWidth: 200,
    height: theme.spacing(16),
  },
  item: {
    margin: 0,
    padding: 0,
    width: theme.spacing(4),
    height: theme.spacing(4),
    // backgroundImage: `url(${i.url})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    border: '1px transparent solid',
    '&:hover': {
      border: '1px red solid',
    },
  },
  tab: {
    minWidth: 'auto',
    padding: 0,
  },
}));
