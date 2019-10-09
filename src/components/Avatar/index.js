import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { getSmallImg } from '@/utils/common';

export default ({ nickname, avatarUrl, size = 40, style, ...props }) => {
  return (
    <Avatar
      aria-label="Avatar"
      src={avatarUrl ? getSmallImg(avatarUrl, size * 2, size * 2) : ''}
      style={{ width: size, height: size, backgroundColor: '#ddd', ...style }}
      {...props}
    >
      {nickname[0]}
    </Avatar>
  );
};
