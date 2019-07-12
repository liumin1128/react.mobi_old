import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
  root: {
    // '&::before': {
    //   content: "''",
    //   position: 'absolute',
    //   width: 0,
    //   height: 0,
    //   top: -theme.spacing(3),
    //   left: theme.spacing(2),
    //   borderWidth: `${theme.spacing(1.5)}px ${theme.spacing(1.5)}px`,
    //   borderStyle: 'solid',
    //   borderColor: 'transparent transparent '+(theme.palette.type === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255)')+' transparent',
    //   display: 'block',
    // },
  },
}));

export default function MyPopper({ children, content }) {
  const classes = useStyles();
  const [ anchorEl, setAnchorEl ] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Fragment>
      <ButtonBase aria-describedby={id} variant="contained" onClick={handleClick}>
        {children}
      </ButtonBase>
      <Popper
        id={id}
        open={open}
        anchorEl={anchorEl}
        transition
        modifiers={{
          flip: {
            enabled: false,
          },
          preventOverflow: {
            enabled: true,
            boundariesElement: 'scrollParent',
          },
          arrow: {
            enabled: true,
            // element: arrowRef,
          },
        }}
      >
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper className={classes.root}>
              {content}
            </Paper>
          </Fade>
        )}
      </Popper>
    </Fragment>
  );
}
