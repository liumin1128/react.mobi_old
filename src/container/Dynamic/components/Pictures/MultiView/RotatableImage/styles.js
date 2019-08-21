import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  img: {
    display: 'block',
    width: '100%',
    '&:hover': {
      cursor: 'zoom-out', // zoom-out;
    },
  },
}));
