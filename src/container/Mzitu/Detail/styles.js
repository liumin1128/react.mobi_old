import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    '& > img': {
      width: '100%',
      marginBottom: theme.spacing(2),
      cursor: 'pointer',
    },
  },
}));
