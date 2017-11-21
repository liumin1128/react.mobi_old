import React from 'react';
import Avatar from '../avatar';
import { timeago } from '../../utils';

export default ({ avatarUrl, nickname, createdAt }) => (<div>
  <div className="flex">
    <Avatar src={avatarUrl} nickname={nickname} size={40} />
    <div className="meta">
      <h3 className="name">{nickname}</h3>
      <p className="createdAt">{timeago(createdAt)}</p>
    </div>

  </div>
  <style jsx>{`
  .meta {
    margin-left: 8px;
  }
  .name {
    font-size: 14px;
  }
  .createdAt {
    font-size: 12px;
  }
  .flex {
    display: flex;
    align-items: center;
  }
`}
  </style>
</div>);
