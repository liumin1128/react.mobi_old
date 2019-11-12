import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tab: {
    height: 64,
    minWidth: 80,
    fontWeight: 'bold',
    [theme.breakpoints.down('xs')]: {
      minWidth: 70,
      height: 56,
    },
  },
  indicator: {
    backgroundColor: '#ffffff',
  },
}));

export default useStyles;
