import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';

export default createMuiTheme({
  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.05)',
      },
      elevation2: {
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.05)',
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
  },
});
