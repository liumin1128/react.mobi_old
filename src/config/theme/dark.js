import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    text: {
      primary: 'rgba(255,255,255, 0.87)',
      secondary: 'rgba(255,255,255, 0.54)',
      disabled: 'rgba(255,255,255, 0.38)',
      hint: 'rgba(255,255,255, 0.38)',
      divider: 'rgba(255,255,255, 0.12)',
    },
    background: {
      default: '#2f2f2f',
    },
  },
});

export default theme;