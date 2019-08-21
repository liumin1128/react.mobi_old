import React, { Fragment, useState, useRef, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import SearchIcon from '@material-ui/icons/Search';
import RotateRightIcon from '@material-ui/icons/RotateRight';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';

import useStyles from './styles';

const trans = {
  0: 'rotate(0deg) translate(0px, 0px)',
  90: 'rotate(90deg) translate(0px, -100%)',
  180: 'rotate(180deg) translate(-100%, -100%)',
  270: 'rotate(270deg) translate(-100%, 0px)',
  '-90': 'rotate(-90deg) translate(-100%, 0px)',
  '-180': 'rotate(-180deg) translate(-100%, -100%)',
  '-270': 'rotate(-270deg) translate(0px, -100%)',
};

function Pictures({ index, pictures, onClose, setIndex }) {
  const classes = useStyles();

  const [ rotate, setRotate ] = useState(0);
  const [isRotated, setIsRotated] = useState(false);
  const img = useRef();

  function handleRotate(reg) {
    if(!img || !img.current || !img.current.width || !img.current.height) return;
    setIsRotated(true)
    setRotate((rotate + reg) % 360);
  }

  return (
    <Fragment>
      <Box
        bgcolor="#ddd"
        color="text.hint"
        display="flex"
        flexWrap="wrap"
        p={1}
      >
        <Box
          px={1.5}
          // py={0.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.toolbtn}
          onClick={() => {
            onClose();
          }}
        >
          <FullscreenExitIcon fontSize="small"></FullscreenExitIcon>收起
        </Box>
        <Box
          px={1.5}
          // py={0.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.toolbtn}
          onClick={() => {
            window.open(pictures[index], "_blank");       
          }}
        >
          <SearchIcon fontSize="small"></SearchIcon>查看原图
        </Box>
        <Box
          px={1.5}
          // py={0.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.toolbtn}
          onClick={() => {
            handleRotate(-90)
          }}
        >
          <RotateLeftIcon fontSize="small"></RotateLeftIcon>向左旋转
        </Box>
        <Box
          px={1.5}
          // py={0.5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          className={classes.toolbtn}
          onClick={() => {
            handleRotate(90)
          }}
        >
          <RotateRightIcon fontSize="small"></RotateRightIcon>向右旋转
        </Box>
      </Box>
      <Box
        onClick={() => {
          onClose();
        }}
        className={classes.rotateBox}
        // style={(rotate / 90 % 2 !== 0) ? {
          style={isRotated ? {
          position: 'relative',
          height: 0,
          transition: 'padding-top .25s ease-out',
          paddingTop: (rotate / 90 % 2 !== 0) 
            ? `${img.current.width / img.current.height * 100}%` 
            : `${img.current.height / img.current.width * 100}%` ,
        } : {
        }}
      >
        <img
          ref={img}
          className={classes.picturebig}
          src={pictures[index]}
          style={isRotated ? {
            transformOrigin: 'left top',
            position: 'absolute',
            top: 0,
            left: 0,
            width: (rotate / 90 % 2 !== 0) ? `${img.current.width / img.current.height * img.current.width}px` : '100%',
            transform: trans[`${rotate}`],
          } : {
          }}
          alt=""
        />
      </Box>

      {pictures.length > 1 && (
        <Box
          m={-0.25}
          mt={0.25}
          display="flex"
          flexWrap="wrap"
          className={classes.bigpictures}
        >
          {pictures.map((i, idx) => (
            <CardMedia
              key={i}
              className={`${classes.bigpicture} ${index === idx ? classes.bigpictureactive : ''}`}
              image={i}
              onClick={() => {
                setIsRotated(false)
                setRotate(0)
                setIndex(idx);
              }}
            />
          ))}
        </Box>
      )}
    </Fragment>
  );
}

export default Pictures;
