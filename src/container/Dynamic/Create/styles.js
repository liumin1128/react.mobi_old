import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
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
