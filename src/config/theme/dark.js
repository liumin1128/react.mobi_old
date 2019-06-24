import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    MuiPaper: {
      root: {
        'background-color': '#212121',
      },
    },
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#fff',
        color: '#212121',
        '&:hover': {
          backgroundColor: '#ccc',
        },
      },
      outlinedPrimary: {
        color: '#fff',
        borderColor: '#fff',
        '&:hover': {
          borderColor: '#ccc',
        },
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#212121',
      contrastText: '#fff',
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

// 站酷字体
// 14px/1.5 "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif;
