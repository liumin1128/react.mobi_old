import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    position: 'fixed',
    right: 48,
    bottom: 48,
    zIndex: 9,
    // background: '#fff',
    // boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
    // borderRadius: 8,
  },
  fab: {
    background: '#fff',
    boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.1)',
    color: '#999',
  },
}));
