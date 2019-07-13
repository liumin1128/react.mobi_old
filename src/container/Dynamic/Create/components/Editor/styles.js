import { fade, withStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',  
    transition: theme.transitions.create([ 'border-color', 'box-shadow' ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    outline: 'none',
    // '-webkit-tap-highlight-color': 'transparent',


    // '-webkit-appearance': 'textfield',
    // 'background-color': 'white',
    // '-webkit-rtl-ordering': 'logical',
    // cursor: 'text',
    // 'border-width': 2,
    // 'border-style': 'inset',
    // 'border-color': 'initial',
    // 'border-image': 'initial',

    // 'outline-offset': -2,  

    '&:focus': {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },

    '&:empty::before': {
      content: 'attr(placeholder)',
      color: 'rgba(0,0,0,0.5)'
    }
  },
}));
