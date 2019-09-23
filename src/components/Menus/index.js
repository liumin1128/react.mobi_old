import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

class LongMenu extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { options = [], children } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <>
        <span onClick={this.handleClick}>
          {children || (
            <IconButton
              aria-label="More"
              aria-owns={open ? 'long-menu' : null}
              aria-haspopup="true"
            >
              <MoreHorizIcon />
            </IconButton>
          )}
        </span>

        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              // maxHeight: ITEM_HEIGHT * 4.5,
              // width: 150,
            },
          }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          elevation={2}
        >
          {options.map((option) => {
            if (option.render) return option.render({ key: option.key });
            return (
              <MenuItem
                key={option.key}
                onClick={() => {
                  this.handleClose();
                  if (option.onClick) option.onClick();
                }}
              >
                {option.label}
              </MenuItem>
            );
          })}
        </Menu>
      </>
    );
  }
}

export default LongMenu;
