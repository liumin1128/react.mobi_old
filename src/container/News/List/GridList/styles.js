import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  '@keyframes rotate': {
    from: {
      'background-position': '-300px',
    },
    to: {
      'background-position': '0px',
    },
  },

  cover: {

    paddingTop: '56%',
    backgroundColor: 'rgba(128,0,0)',
    marginBottom: 12,
    // borderRadius: 4,

    position: 'relative',

    '&:hover': {
      '&::after': {
        content: "''",
        position: 'absolute',
        width: 'calc(100% + 4px)',
        height: 'calc(100% + 4px)',

        // borderRadius: 4,

        top: -2,
        left: -2,
        display: 'block',
        zIndex: -1,

        animation: '$rotate 5s infinite linear',
        background: '-webkit-gradient(linear, left top, right top, color-stop(0%,rgba(48,255,144,1)), color-stop(25%,rgba(237,45,237,1)), color-stop(50%,rgba(201,152,38,1)), color-stop(75%,rgba(48,255,230,1)), color-stop(100%,rgba(48,255,144,1)))',
      },
    },


  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '1',
    '-webkit-box-orient': 'vertical',
    // minHeight: '3em',
    [theme.breakpoints.down('xs')]: {
      '-webkit-line-clamp': '3',
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
