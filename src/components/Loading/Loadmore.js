import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Waypoint } from 'react-waypoint';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => {
  console.log('theme');
  console.log(theme);
  return {
    tip: {
      width: '100%',
      textAlign: 'center',
      color: theme.palette.text.hint,
      padding: theme.spacing(1),
    },
  };
});

function Loadmore({
  isLoadingText = '拼命加载中',
  isEndText = '~ 这是人家的底线 ~',
  isLoading,
  isEnd,
  loadMore,
}) {
  const classes = useStyles();
  if (isEnd) {
    return (
      <Typography className={classes.tip} component="div">
        {isEndText}
      </Typography>
    );
  }
  if (isLoading) {
    return (
      <Typography className={classes.tip} component="div">
        <Box display="flex" justifyContent="center" alignItems="center">
          {isLoadingText}
          <Box ml={2} />
          <CircularProgress color="inherit" size={12} />
        </Box>
      </Typography>
    );
  }
  return (
    <Waypoint onEnter={loadMore} />
  );
}


export default Loadmore;
