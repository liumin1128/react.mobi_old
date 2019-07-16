import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
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
  },
  picturebig: {
    width: '100%',
    paddingTop: '100%',
    '&:hover': {
      cursor: 'zoom-out', // zoom-out;
    },
  },
  pictureone: {
    width: theme.spacing(27),
    height: theme.spacing(27),
    borderRadius: theme.spacing(0.5),
    marginBottom: theme.spacing(1.5),
  },

  bigpictures: {
    maxWidth: theme.spacing(100),
  },
  bigpicture: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    borderRadius: theme.spacing(0.5),
    margin: theme.spacing(0.25),
    '&:hover': {
      cursor: 'zoom-in', // zoom-out;
    },
  },
}));
