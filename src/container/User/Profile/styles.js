import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    background: 'url(https://imgs.react.mobi/Fr4EdZe1cP8i9z04af37ZiGPknoF)',
    'background-size': 'cover',
    'background-position': '50% 60%',
    minHeight: 180,
    backgroundColor: '#000',
  },
  avatar: {
    border: '1px #fff solid',
    boxShadow: '1px 2px 3px rgba(0,0,0,0.2)',
    width: 100,
    height: 100,
    marginTop: -50,
    marginLeft: theme.spacing(2),
    // position: 'absolute',
    // margin: 'auto',
  },
  tab: {
    textTransform: 'none',
    minWidth: theme.spacing(10),
    // fontSize: 16,
  },
  selected: {
    color: theme.palette.primary.main,
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 3,
    '& > div': {
      maxWidth: 36,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
