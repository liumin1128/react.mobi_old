// src/ui/theme/index.js
import Color from 'color';
import { createMuiTheme } from '@material-ui/core/styles';

// const palette = { primary: { main: '#FF4081', contrastText: '#ffffff' } };
const themeName = 'Wild Strawberry Razzmatazz Malayan Tiger';
const palette = { primary: { main: '#fd4c86', contrastText: '#ffffff' } };
const overrides = {
  MuiAppBar: {
    root: {
      background: `linear-gradient(60deg, ${Color(palette.primary.main).lighten(0.1)}, ${Color(palette.primary.main).darken(0)})`,
      // background: 'none',
      // boxShadow: '0 3px 5px 0 rgba(168,182,191,0.3)',
      boxShadow: `0 4px 8px 0px ${Color(palette.primary.main).alpha(0.3)}, 0 3px 5px -2px ${Color(palette.primary.main).alpha(0.5)}`,
    },
    // colorPrimary: {
    //   backgroundColor: '#fff',
    //   color: '#fd4c86'
    // },
  },
  MuiDivider: {
    root: {
      'background-color': 'rgba(0,0,0,0.07)'
    }
  },
  MuiPaper: {
    root: {
      color: '#333',
      font: `14px/1.5 "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif`
    },
    elevation1: {
      // boxShadow: 'none',
      boxShadow: '0 3px 5px 0 rgba(168,182,191,0.1)',
      // transition: 'all .25s ease-out',
      // '&:hover': {
      //   boxShadow: '0 10px 20px 0 rgba(168,182,191,0.6)',
      //   transform: 'translateY(-1px)'
      // }
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
      boxShadow: `0 4px 8px 0px ${Color(palette.primary.main).alpha(0.3)}, 0 3px 5px -2px ${Color(palette.primary.main).alpha(0.5)}`,
    }
  },
  MuiLink: {
    root: {
      "&:hover": {
        color: '#fd4c86'
      }
    },
  }
}

export default createMuiTheme({ themeName, palette, overrides });
