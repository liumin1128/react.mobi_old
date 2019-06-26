import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  name: {
    fontSize: 16,
  },
  content: {
    lineHeight: 1.875,
    marginTop: theme.spacing(1),
  },
}));
