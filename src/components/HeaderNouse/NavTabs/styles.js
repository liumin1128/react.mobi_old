import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tab: {
    height: 20,
    minWidth: 'auto',
    fontWeight: 'bold',
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      maxWidth: 24,
      width: '100%',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

export default useStyles;
