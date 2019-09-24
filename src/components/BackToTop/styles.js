import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'fixed',
    right: 64,
    bottom: 64,
    zIndex: 9,
    width: 64,
    height: 64,
    background: '#fff',
    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
    borderRadius: 8,
  },
}));
