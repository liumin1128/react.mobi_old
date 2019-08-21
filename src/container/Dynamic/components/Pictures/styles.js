import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      // marginTop: theme.spacing(1),
    },
  },
  pictures: {
    maxWidth: theme.spacing(42),
  },
  picture: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    borderRadius: theme.spacing(0.5),
    margin: theme.spacing(0.25),
    '&:hover': {
      cursor: 'zoom-in', // zoom-out;
    },
    [theme.breakpoints.down('xs')]: {
      width: theme.spacing(11.5),
      height: theme.spacing(11.5),
    },
  },
  picturebig: {
    display: 'block',
    width: '100%',
    // transform: 'rotate(90deg)',
    '&:hover': {
      cursor: 'zoom-out', // zoom-out;
    },
  },
  pictureone: {
    width: theme.spacing(27),
    height: theme.spacing(27),
    borderRadius: theme.spacing(0.5),
    // marginBottom: theme.spacing(1.5),
    '&:hover': {
      cursor: 'zoom-in', // zoom-out;
    },

  },

  bigpictures: {
    maxWidth: theme.spacing(100),
  },

  bigpicture: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    // borderRadius: theme.spacing(0.5),
    margin: theme.spacing(0.25),
    display: 'block',
    opacity: 0.5,
    '&:hover': {
      cursor: 'pointer', // zoom-out;
    },
  },
  bigpictureactive: {
    opacity: 1,
    border: `1px ${theme.palette.primary.main } solid`,
  },
  rotateBox: {
    transition: 'padding-top .25s ease-out'
  },
  toolbtn: {
    '&:hover': {
      cursor: 'pointer', // zoom-out;
    },
  }
}));
