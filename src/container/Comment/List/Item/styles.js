import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  root: {
    // border: '1px red solid',
    // '&:hover .delete-comment': {
    //   display: 'inline-block',
    // },
  },
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  name: {
    fontSize: '1.125em',
  },
  content: {
    lineHeight: 1.875,
    // marginTop: theme.spacing(1),
  },
  html: {
    position: 'relative',
    color: '#666',
    '& .emoji': {
      // width: '1.5em',
      // height: '1.5em',
      width: '5em',
      height: '5em',
      'vertical-align': '-0.5em',
    },
  },
  'delete-comment': {
    display: 'none',
  },
  Badge: {
    left: 0,
  },
  primary: {
    color: `${theme.palette.primary.main} !important`
  },
}));
