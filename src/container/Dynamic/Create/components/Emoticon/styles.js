import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  box: {
    maxWidth: 200,
  },
  item: {
    margin: 0,
    padding: 0,
    width: 32,
    height: 32,
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
