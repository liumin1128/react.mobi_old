import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  header: {
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(2),
    },
  },
  avatar: {
    width: 48,
    height: 48,
  },
  nickname: {
    fontSize: '1.125em',
  },
  content: {
    // border: '1px red solid',
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      marginLeft: theme.spacing(0),
    },
  },
  picture: {
    width: theme.spacing(13),
    height: theme.spacing(13),
    borderRadius: theme.spacing(0.5),
    margin: 4,
  },
  html: {
    position: 'relative',
    // color: '#666',
    cursor: 'pointer',
    '& .emoji': {
      // width: '1.5em',
      // height: '1.5em',
      'vertical-align': '-0.5em',
      width: '5em',
      height: '5em',
    },
    '& a': {
      color: '#fd4c86',
      textDecoration: 'none',
    },
  },
  primary: {
    color: `${theme.palette.primary.main} !important`,
  },

  MenuItem: {
    minWidth: 100,
  },
}));
