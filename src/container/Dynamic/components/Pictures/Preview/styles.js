import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  pictures: {
    maxWidth: theme.spacing(42),
  },
  
  item: {
    borderRadius: theme.spacing(0.5),
    backgroundColor: 'rgba(0,0,0,0.05)',
    '&:hover': {
      cursor: 'zoom-in', // zoom-out;
    },
  },

  item_1_1: {
    width: '100%',
    paddingTop: '100%',
  },

  item_1_2: {
    width: '100%',
    paddingTop: `calc(200% + ${theme.spacing(0.5)}px)`,
  },

  item_2_3: {
    width: '100%',
    paddingTop: `calc(150% + ${theme.spacing(0.25)}px)`,
  },
}));
