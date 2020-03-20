import React from 'react';
import Box from '@material-ui/core/Box';
import SearchIcon from '@material-ui/icons/Search';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import useStyles from './styles';

function PicturesToolbar({ onClose, onView, onRouteRight, onRouteLeft }) {
  const classes = useStyles();
  return (
    <Box
      bgcolor="rgba(0, 0, 0, 0.1)"
      color="text.hint"
      display="flex"
      flexWrap="wrap"
      p={1}
    >
      <Box
        px={1.5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.toolbtn}
        onClick={() => {
          onClose();
        }}
      >
        <FullscreenExitIcon fontSize="small" />
        收起
      </Box>
      <Box
        px={1.5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.toolbtn}
        onClick={() => {
          onView();
        }}
      >
        <SearchIcon fontSize="small" />
        查看原图
      </Box>
      <Box
        px={1.5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.toolbtn}
        onClick={() => {
          onRouteLeft();
        }}
      >
        <RotateLeftIcon fontSize="small" />
        向左旋转
      </Box>
      <Box
        px={1.5}
        display="flex"
        justifyContent="center"
        alignItems="center"
        className={classes.toolbtn}
        onClick={() => {
          onRouteRight();
        }}
      >
        <RotateRightIcon fontSize="small" />
        向右旋转
      </Box>
    </Box>
  );
}

export default PicturesToolbar;

