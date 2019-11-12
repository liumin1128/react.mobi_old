import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tab: {
    // height: 64,
    minWidth: 64,
    // fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      // minWidth: 70,
      // height: 56,
    },
  },
  selected: {
    // color: theme.palette.primary.main,
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 36,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
