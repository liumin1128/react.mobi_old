import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // root: {
  //   background: 'url(https://imgs.react.mobi/Fr4EdZe1cP8i9z04af37ZiGPknoF)',
  //   'background-size': 'cover',
  //   'background-position': '50% 60%',
  //   minHeight: 200,
  // },
  header: {
    padding: theme.spacing(3),
    paddingBottom: 0,
  },
  card: {
    // border: '1px solid red',
  },
  tab: {
    textTransform: 'none',
    minWidth: 'auto',
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 36,
      width: '100%',
      backgroundColor: theme.palette.text.primary,
    },
  },
}));
