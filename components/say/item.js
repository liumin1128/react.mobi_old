import React from 'react';
import Link from 'next/link';
import Icon from '../icon';
import Avatar from '../avatar';
// import TimeAgo from 'timeago-react';
import { timeago } from '../../utils';

export default ({
  title, _id, content, photos, user, createdAt,
}) => (
  <div className="item">
    <div className="flex">
      <Avatar src={user && user.avatarUrl} nickname={user.nickname} size={40} />
      <div className="meta">
        <h1 className="name">{user && user.nickname}</h1>
        <p className="created">{timeago(createdAt)}</p>
      </div>
    </div>
    <Link href={`/say/detail?id=${_id}`}>
      <a>
        <div>
          {
            photos && photos.length === 1 &&
              <img src={photos[0]} className="cover" alt="" />
          }
          {
          (title || content) &&
            <div className="body">
              {
                title && <h1 className="title">{title}</h1>
              }
              {
                content && <p className="content">{content}</p>
              }
            </div>
          }
        </div>
      </a>
    </Link>
    <div className="footer">

      <div className="button">
        <Icon icon="favorite" color="rgba(0,0,0,0.1)" size={16} />
        <span className="value">喜欢</span>
      </div>
      <div className="button">
        <Icon icon="message" color="rgba(0,0,0,0.1)" size={16} />
        <span className="value">评论</span>
      </div>
    </div>
    <style jsx>{`
      .footer {
        display: flex;
        justify-content: flex-end;
        padding: 8px;
      }
      .footer .button {
        margin-left: 8px;
        display: flex;
        color: rgba(0,0,0,0.3);
        font-size: 12px;
        align-items: center;
      }
      .footer .button .value {
        margin-left: 3px;
      }
      .item {
        background: #fff;
        margin-bottom: 20px;
        box-shadow: 0 10px 28px 0 rgba(137,157,197,.12);
      }
      .meta {
        margin-left: 8px;
      }
      .body {
        padding: 0 16px;
      }
      .cover {
        width: 100%;
      }
      .title {
        font-size: 16px;
        font-weight: 100;
        margin-bottom: 10px;
        color: #789;
      }
      .content {
        font-size: 14px;
      }
      .name {
        font-size: 14px;
      }
      .created {
        font-size: 12px;
      }
      .flex {
        display: flex;
        align-items: center;
        padding: 16px;
      }
    `}
    </style>
  </div>);
