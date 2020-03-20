import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import Box from '@material-ui/core/Box';
// import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';


export default function MyPopper({ children, content, ...props }) {
  const [ anchorEl, setAnchorEl ] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  }

  function handleClickAway() {
    setAnchorEl(null);
  }

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <>
      <Box onClick={handleClick}>
        {children}
      </Box>
      {open && (
        <ClickAwayListener onClickAway={handleClickAway}>
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
            {...props}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <div>
                  {content}
                </div>
              </Fade>
            )}
          </Popper>
        </ClickAwayListener>
      )}
    </>
  );
}
