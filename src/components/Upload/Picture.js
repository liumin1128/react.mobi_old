import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';
import PhotoIcon from '@material-ui/icons/Add';
import Wrapper from '@/components/Upload/Wrapper';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 240,
    height: 240,
    backgroundSize: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // borderRadius: 8,
    // border: `1px ${theme.palette.primary.main} dashed`,
    border: '1px #ddd dashed',
    '&:hover': {
      '& > .pictures-close-btn': {
        display: 'block',
      },
    },
  },
  close: {
    display: 'none',
    position: 'absolute',
    top: theme.spacing(0),
    right: theme.spacing(0),
    background: 'rgba(0,0,0,0.5)',
    width: theme.spacing(4),
    height: theme.spacing(4),
    '& > svg': {
      width: '100%',
      height: '100%',
      color: '#fff',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
}));

export default ({ onChange, value, size = 200, style }) => {
  const classes = useStyles();
  return (
    <Box display="inline-block">
      <Wrapper
        onChange={(val) => {
          onChange(val[0]);
        }}
      >
        <ButtonBase>
          <Box
            className={classes.root}
            style={{ backgroundImage: `url(${value})`, width: size, height: size, ...style }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {value ? (
              <Box
                className={`${classes.close} pictures-close-btn`}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(null);
                }}
              >
                <CloseIcon />
              </Box>
            ) : (
              <PhotoIcon
                style={{ color: '#ddd', width: '33%', height: '33%' }}
              />
            )}
          </Box>
        </ButtonBase>
      </Wrapper>
    </Box>
  );
};
