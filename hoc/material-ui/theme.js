import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import Color from 'color';

const theme = createMuiTheme();

export default createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        background: `linear-gradient(60deg, ${Color('#2196f3').lighten(0.1)}, ${Color('#2196f3').darken(0.1)})`,
        boxShadow: `0 4px 20px 0px ${Color('#2196f3').alpha(0.3)}, 0 7px 10px -5px ${Color('#2196f3').alpha(0.5)}`,
      },
    },
    MuiInputLabel: {
      formControl: {
        color: '#9197a3',
      },
    },
    MuiInput: {
      underline: {
        '&::before': {
          borderBottom: '1px #ddd solid',
        },
      },
      input: {
        '-webkit-box-shadow': '0 0 0px 1000px #262333 inset !important', // 关于解决输入框背景颜色
        '-webkit-text-fill-color': 'rgba(255,255,255,1)!important', // 关于接输入框文字颜色
      },
    },
    MuiPaper: {
      elevation1: {
        // boxShadow: '0 5px 5px 0px rgba(0, 0, 0, 0.03)',
        boxShadow: 'none',
        borderRadius: 4,
        marginBottom: theme.spacing.unit * 2,
        [theme.breakpoints.down('xs')]: {
          marginBottom: theme.spacing.unit * 1,
          boxShadow: 'none',
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
