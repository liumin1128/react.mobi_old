
import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';

export default createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
    background: {
      default: '#f6f6f6',
    },
  },
  common: {
    shadows: ['0 10px 28px 0 rgba(137,157,197,.12)'],
  },
});
