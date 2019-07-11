import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  avatar: {
    width: 48,
    height: 48,
  },
  nickname: {
    fontSize: '1.125em',
  },
  content: {
    // border: '1px red solid',
    paddingLeft: theme.spacing(10),
    paddingTop: 0,
  },
}));
