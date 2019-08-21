import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  marsk: {
    position: 'absolute',
    top: 0,
    height: '100%',
    width: '30%',
    zIndex: 1,
    background: 'rgba(0,0,0,0)',
  },
  left: {
    left: 0,
    cursor: 'url(https://imgs.react.mobi/Fsf7mnTtolDXXD82po62XUgdKGK5),auto',
  },
  right: {
    right: 0,
    cursor: 'url(https://imgs.react.mobi/FiQd_o8R1l4e-vtnDb2l_WkDGBRT),auto',
  },
}));
