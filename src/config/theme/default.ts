// src/ui/theme/index.js
// import Color from "color";
import { createMuiTheme } from "@material-ui/core/styles";

// const palette = { primary: { main: '#FF4081', contrastText: '#ffffff' } };
// const themeName: string = "Wild Strawberry Razzmatazz Malayan Tiger";

const palette = {
  divider: "#eeeeee",
  primary: {
    main: "#3097fc",
    contrastText: "#ffffff",
    // a100: Color('#fd4c86').lighten(0.6)+''
  },
};

const typography = {
  fontFamily: ["poppins", "sans-serif"].join(","),
};

const overrides = {
  MuiAppBar: {
    root: {
      // background: `linear-gradient(60deg, ${Color(palette.primary.main).lighten(0.1)}, ${Color(palette.primary.main).darken(0)})`,
      // background: 'none',
      // boxShadow: '0 3px 5px 0 rgba(168,182,191,0.3)',
      // boxShadow: `0 4px 8px 0px ${Color(palette.primary.main).alpha(0.3)}, 0 3px 5px -2px ${Color(palette.primary.main).alpha(0.5)}`,
    },
    colorPrimary: {
      backgroundColor: "#fff",
      color: "#3097fc",
    },
  },
  MuiDivider: {
    root: {
      "background-color": "rgba(0,0,0,0.07)",
    },
  },
  MuiPaper: {
    root: {
      color: "#333",
      font: '14px/1.5 "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif',
    },
    elevation1: {
      boxShadow: "none",
    },
    elevation2: {
      boxShadow: "0 3px 5px 0 rgba(168,182,191,0.1)",
    },
  },
  MuiTypography: {
    body1: {
      font: '16px/1.5 "sans-serif", "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif',
      color: "#666",
    },
    body2: {
      font: '14px/1.5 "sans-serif", "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif',
      color: "#666",
    },
    caption: {
      font: '10px/1.5 "sans-serif", "PingFang SC","Lantinghei SC","Microsoft YaHei","HanHei SC","Helvetica Neue","Open Sans",Arial,"Hiragino Sans GB","微软雅黑",STHeiti,"WenQuanYi Micro Hei",SimSun,sans-serif',
      color: "#999",
    },
  },
  MuiButton: {
    // contained: {
    //   boxShadow: "0 3px 5px 0 rgba(168,182,191,0.1)",
    //   // boxShadow: `0 4px 8px 0px ${Color(palette.primary.main).alpha(0.3)}, 0 3px 5px -2px ${Color(palette.primary.main).alpha(0.5)}`,
    // },
  },
  MuiLink: {
    root: {
      "&:hover": {
        color: "#fd4c86",
      },
    },
  },
};

const theme = createMuiTheme({ palette, overrides, typography });

export default theme;
