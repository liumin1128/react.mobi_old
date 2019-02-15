import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import red from '@material-ui/core/colors/red';
import Color from 'color';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

export default createMuiTheme({
  overrides: {
    MuiAppBar: {
      root: {
        // background: `linear-gradient(60deg, ${Color('#2196f3').lighten(0.1)}, ${Color('#2196f3').darken(0.1)})`,
        boxShadow: `
          0 4px 8px 0px ${Color(cyan.A700).alpha(0.3)},
          0 3px 5px -2px ${Color(cyan.A700).alpha(0.5)}
        `,
      },
    },
    MuiCardContent: {
      root: {
        // '&:last-child': {
        //   paddingBottom: 16,
        // },
      },
    },
    // MuiInputLabel: {
    //   formControl: {
    //     color: '#9197a3',
    //   },
    // },
    // MuiInput: {
    //   // underline: {
    //   //   '&::before': {
    //   //     borderBottom: '1px #ddd solid',
    //   //   },
    //   // },
    //   input: {
    //     // '-webkit-box-shadow': '0 0 0px 1000px white inset',
    //     // '-webkit-text-fill-color': '#333',
    //     // '-webkit-box-shadow': '0 0 0px 1000px white inset', // 使用足够大的纯色阴影来覆盖input输入框黄色背景颜色
    //     // '-webkit-box-shadow': '0 0 0px 1000px #262333 inset !important', // 关于解决输入框背景颜色
    //     // '-webkit-text-fill-color': 'rgba(255,255,255,1)!important', // 关于接输入框文字颜色
    //   },
    // },
    MuiPaper: {
      elevation1: {
        boxShadow: '0 5px 5px 0px rgba(0, 0, 0, 0.03)',
        // boxShadow: 'none',
        borderRadius: 4,
        marginBottom: theme.spacing.unit * 2,
        [theme.breakpoints.down('xs')]: {
          marginBottom: theme.spacing.unit * 1,
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      contained: {
        boxShadow: `
          0 4px 8px 0px ${Color(cyan.A700).alpha(0.3)},
          0 3px 5px -2px ${Color(cyan.A700).alpha(0.5)}
        `,
      },
    },
  },
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: { ...cyan, contrastText: '#fff' },
    secondary: red,
    // primary: {
    //   light: '#ff8b80',
    //   main: '#ff6f61',
    //   dark: '#b24d43',
    //   contrastText: '#fff',
    // },
    // secondary: {
    //   light: '#73c9ff',
    //   main: '#50bcff',
    //   dark: '#3883b2',
    //   contrastText: '#fff',
    // },
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
    maxWidth: 960,
    width: '100%',
    margin: 'auto',
    [theme.breakpoints.down('xs')]: {
      overflow: 'hidden',
    },
  },
});
