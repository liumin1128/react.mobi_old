import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { getSmallImg } from '@/utils/common';

export default ({ nickname, src, size, ...props }) => {
  return (
    <Avatar
      {...props}
      aria-label="Avatar"
      src={getSmallImg(src, size * 2, size * 2)}
    >
      {nickname[0]}
    </Avatar>
  );
};
