import React, { Fragment, useState, useRef} from 'react';
import Box from '@material-ui/core/Box';
import CardMedia from '@material-ui/core/CardMedia';
import useStyles from './styles';

function Pictures({ index, pictures, onClose, setIndex }) {
  const classes = useStyles();

  const [ rotate, setRotate ] = useState(0);

  const img = useRef();

  return (
    <Fragment>
      <Box
        bgcolor="#ddd"
        color="text.hint"
        display="flex"
        px={1}
      >
        <Box
          px={1}
          py={0.5}
          className={classes.toolbtn}
          onClick={() => {
            onClose();
          }}
        >
          收起
        </Box>
        <Box
          px={1}
          py={0.5}
          className={classes.toolbtn}

        >
          查看原图
        </Box>
        <Box
          px={1}
          py={0.5}
          className={classes.toolbtn}
          onClick={() => {
            setRotate((rotate - 90) % 360);
          }}
        >
          向左旋转
        </Box>
        <Box
          px={1}
          py={0.5}
          className={classes.toolbtn}
          onClick={() => {
            setRotate((rotate + 90) % 360);
          }}
        >
          向右旋转
        </Box>
      </Box>
      <Box
        onClick={() => {
          onClose();
        }}
        style={(rotate / 90 % 2 !== 0)  ? {
          position: 'relative',
          // border: '1px red solid',
          height: 0,
          paddingTop: (img.current.width / img.current.height * 100) +'%',
        } : {}}
      >
        <img
          ref={img}
          className={classes.picturebig}
          src={pictures[index]}
          style={(rotate / 90 % 2 !== 0) ? {
            transform: `rotate(${rotate}deg) scale(${img.current.width / img.current.height})`,
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            margin: 'auto',
            // width: 
            // width: 
          } : {
            transform: `rotate(${rotate}deg)`,
          }}
          alt=""
        />
      </Box>

      {pictures.length > 1 && (
        <Box
          m={-0.25}
          mt={0.25}
          // mt={1}
          // mb={1}
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
