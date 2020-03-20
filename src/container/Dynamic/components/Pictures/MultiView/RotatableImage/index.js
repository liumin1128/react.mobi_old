import React from 'react';
import Box from '@material-ui/core/Box';
import useStyles from './styles';
// import Marsk from '../Marsk'

const trans = {
  0: 'rotate(0deg) translate(0px, 0px)',
  90: 'rotate(90deg) translate(0px, -100%)',
  180: 'rotate(180deg) translate(-100%, -100%)',
  270: 'rotate(270deg) translate(-100%, 0px)',
  '-90': 'rotate(-90deg) translate(-100%, 0px)',
  '-180': 'rotate(-180deg) translate(-100%, -100%)',
  '-270': 'rotate(-270deg) translate(0px, -100%)',
};

function RotatableImage({ src, isRotated, rotate, img, onClick }) {
  const classes = useStyles();
  return (
      <Box
        className={classes.root}
        style={isRotated ? {
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
          className={classes.img}
          src={src}
          style={isRotated ? {
            transformOrigin: 'left top',
            position: 'absolute',
            top: 0,
            left: 0,
            width: (rotate / 90 % 2 !== 0) 
                ? `${img.current.width / img.current.height * img.current.width}px` 
                : '100%',
            transform: trans[`${rotate}`],
          } : {
          }}
          onClick={onClick}
          alt=""
        />

{/* <Marsk></Marsk> */}

      </Box>
  );
}

export default RotatableImage;
