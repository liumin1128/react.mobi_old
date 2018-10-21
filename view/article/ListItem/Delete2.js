import React, { PureComponent } from 'react';
import MenuItem from '@material-ui/core/MenuItem';

export default class Delete extends PureComponent {
  render() {
    return (
      <MenuItem
        onClick={() => {
          this.handleClose();
          // if (option.onClick) option.onClick();
        }}
      >
        删除222
      </MenuItem>
    );
  }
}
