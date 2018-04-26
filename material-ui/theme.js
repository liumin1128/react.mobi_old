import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';

const theme = createMuiTheme();

export default createMuiTheme({
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow: '0 3px 5px 0px rgba(0, 0, 0, 0.05)',
      },
      elevation2: {
        boxShadow: '0 3px 5px 0px rgba(0, 0, 0, 0.05)',
        [theme.breakpoints.down('xs')]: {
          // boxShadow: '0 1px 2px 1px rgba(0, 0, 0, 0.05)',
          boxShadow: '0 2px 3px 0px rgba(0, 0, 0, 0.05)',
          // boxShadow: 'none',
        },
      },
    },
  },
  palette: {
    primary: blue,
    secondary: red,
    background: {
      default: '#f3f4f7',
    },
  },
  nowrap: {
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  container: {
    maxWidth: 1110,
    width: '100%',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      overflow: 'hidden',
    },
  },
});
