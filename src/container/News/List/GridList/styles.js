import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  cover: {
    paddingTop: '56%',
    backgroundColor: 'rgba(128,128,128,0.3)',
    marginBottom: 12,
    borderRadius: 4,
    borderBottomRightRadius: 0,
    transition: 'background-size 0.2s',
    backgroundSize: '100%',
    '&:hover': {
      backgroundSize: '110%',
      // border: '1px red solid',
    },

  },
  title: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '1',
    '-webkit-box-orient': 'vertical',
    // minHeight: '3em',
    [theme.breakpoints.down('xs')]: {
      '-webkit-line-clamp': '3',
    },
  },
}));
