import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { getSmallImg } from '@/utils/common';

export default ({ nickname, avatarUrl, size = 40, style, ...props }) => {
  return (
    avatarUrl
      ? (
        <Avatar
          aria-label="Avatar"
          alt={nickname[0]}
          src={avatarUrl ? getSmallImg(avatarUrl, size * 2, size * 2) : ''}
          style={{ width: size, height: size, backgroundColor: '#ddd', ...style }}
        />
      ) : (
        <Avatar
          style={{ width: size, height: size, backgroundColor: '#ddd', ...style }}
        >
          {nickname[0]}
        </Avatar>
      )
  );
};
