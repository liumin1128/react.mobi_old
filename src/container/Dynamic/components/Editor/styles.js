import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  item: {
    position: 'relative',
    borderRadius: theme.spacing(0.5),
    overflow: 'hidden',
    '&:hover': {
      '& > .pictures-close-btn': {
        display: 'block',
      },
    },
  },
  picture: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    borderRadius: theme.spacing(0.5),
    margin: 4,
  },
  close: {
    display: 'none',
    position: 'absolute',
    top: theme.spacing(0.5),
    right: theme.spacing(0.5),
    background: 'rgba(0,0,0,0.5)',
    width: theme.spacing(2),
    height: theme.spacing(2),
    '& > svg': {
      width: '100%',
      height: '100%',
      color: '#fff',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    minHeight: theme.spacing(15),
    maxHeight: theme.spacing(30),
    overflowY: 'scroll',
    // backgroundColor: theme.palette.common.white,
    border: '1px solid rgba(0,0,0,0.1)',
    fontSize: 16,
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
      color: 'rgba(0,0,0,0.3)',
    },

    '& .emoji': {
      width: '1.5em',
      height: '1.5em',
      'vertical-align': -4,
      // width: '5em',
      // height: '5em',
    },
  },
}));


// .gradient {
//   background: rgb(48,255,144); /* Old browsers */
// background: -moz-linear-gradient(left,  rgba(48,255,144,1) 0%, rgba(237,45,237,1) 25%, rgba(201,152,38,1) 50%, rgba(48,255,230,1) 75%, rgba(48,255,144,1) 100%); /* FF3.6+ */
// background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(48,255,144,1)), color-stop(25%,rgba(237,45,237,1)), color-stop(50%,rgba(201,152,38,1)), color-stop(75%,rgba(48,255,230,1)), color-stop(100%,rgba(48,255,144,1))); /* Chrome,Safari4+ */
// background: -webkit-linear-gradient(left,  rgba(48,255,144,1) 0%,rgba(237,45,237,1) 25%,rgba(201,152,38,1) 50%,rgba(48,255,230,1) 75%,rgba(48,255,144,1) 100%); /* Chrome10+,Safari5.1+ */
// background: -o-linear-gradient(left,  rgba(48,255,144,1) 0%,rgba(237,45,237,1) 25%,rgba(201,152,38,1) 50%,rgba(48,255,230,1) 75%,rgba(48,255,144,1) 100%); /* Opera 11.10+ */
// background: -ms-linear-gradient(left,  rgba(48,255,144,1) 0%,rgba(237,45,237,1) 25%,rgba(201,152,38,1) 50%,rgba(48,255,230,1) 75%,rgba(48,255,144,1) 100%); /* IE10+ */
// background: linear-gradient(to right,  rgba(48,255,144,1) 0%,rgba(237,45,237,1) 25%,rgba(201,152,38,1) 50%,rgba(48,255,230,1) 75%,rgba(48,255,144,1) 100%); /* W3C */
// filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#30ff90', endColorstr='#30ff90',GradientType=1 ); /* IE6-9 */

// }
