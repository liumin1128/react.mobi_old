import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  card: {
    padding: theme.spacing(1),
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
    // paddingLeft: theme.spacing(10),
    marginTop: theme.spacing(-1),
    paddingTop: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  picture: {
    width: theme.spacing(10),
    height: theme.spacing(10),
    borderRadius: theme.spacing(0.5),
    margin: 4,
  },
  html: {
    position: 'relative',

    '& .emoji': {
      width: '1.25em',
      height: '1.25em',
      'vertical-align': -4,
    },
  },
}));
