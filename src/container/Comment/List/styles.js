import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  avatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
  name: {
    fontSize: 16,
  },
  content: {
    lineHeight: 1.875,
    marginTop: theme.spacing(1),
  },
  replay: {
    backgroundColor: theme.palette.type === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
    borderRadius: theme.spacing(0.5),
    marginTop: theme.spacing(2),
    position: 'relative',
    '&::before': {
      content: "''",
      position: 'absolute',
      width: 0,
      height: 0,
      top: -theme.spacing(3),
      left: theme.spacing(2),
      borderWidth: `${theme.spacing(1.5)}px ${theme.spacing(1.5)}px`,
      borderStyle: 'solid',
      borderColor: 'transparent transparent '+(theme.palette.type === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)')+' transparent',
      display: 'block',
    },
  },
}));
