import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  iframe: {
    width: '100%',
    height: 0,
    paddingTop: '60%',
    position: 'relative',
    backgroundColor: 'rgba(0,0,0,0.05)',
    '& iframe': {
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: 0,
      top: 0,
    },
  },
}));
