import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import cyan from '@material-ui/core/colors/cyan';
import Color from 'color';

// Create a theme instance.
const theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        background: `linear-gradient(60deg, ${Color(cyan.A700).lighten(0.1)}, ${Color(cyan.A700).darken(0)})`,
        boxShadow: `0 4px 8px 0px ${Color(cyan.A700).alpha(0.3)}, 0 3px 5px -2px ${Color(cyan.A700).alpha(0.5)}`,
      },
    },
    MuiPaper: {
      root: {
        color: '#333',
        font: `14px/1.5 "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif`
      },
      elevation1: {
        boxShadow: 'none',
      }
    },
    MuiTypography: {
      body2: {
        font: `14px/1.5 "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif`,
        color: '#666',
      },
    },
    MuiButton: {
      contained: {
        boxShadow: `0 4px 8px 0px ${Color(cyan.A700).alpha(0.3)}, 0 3px 5px -2px ${Color(cyan.A700).alpha(0.5)}`,
      }
    }
  },
  palette: {
    primary: {
      ...cyan,
      contrastText: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f3f4f7',
    },
  },
});

export default theme;
