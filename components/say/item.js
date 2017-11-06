import React from 'react';
import Link from 'next/link';
import TimeAgo from 'timeago-react';


export default ({
  title, _id, content, photos, user, createdAt,
}) => (
  <div className="item">
    <div className="flex">
      <img src={user && user.avatarUrl} className="avatar" alt="" />
      <div >
        <h1 className="name">{user && user.nickName}</h1>
        <p className="created"><TimeAgo datetime={createdAt} locale="zh_CN" /></p>
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
    <style jsx>{`
    .item {
      background: #fff;
      margin-bottom: 20px;
      // border-radius: 4px;
      box-shadow: 0 10px 28px 0 rgba(137,157,197,.12);
      min-height: 150px;
    }
    .body {
      padding: 10px;
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
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 100px;
      margin-right: 10px;
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
      padding: 10px;
    }
  `}
    </style>
  </div>);
