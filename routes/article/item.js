import React from 'react';
import Link from 'next/link';
import { timeago } from '../../utils';

export default ({
  title, cover, _id, createdAt,
}) => (<div className="item card">
  <Link href={`/article/detail?id=${_id}`}>
    <div>
      <div className="cover">
        <img className="cover" src={cover} alt="" />
      </div>
      <div className="summary">
        <h2 className="title">
          {title}
        </h2>
        <p className="meta">
          {timeago(createdAt)}
        </p>

      </div>
    </div>
  </Link>
  <style jsx>{`
    .cover {
      width: 100%;
      max-height: 150px;
      border-radius: 4px 4px 0 0;
    }
    .item {
      padding: 0px;
      border-radius: 4px;
    }
    .item .summary {
      padding: 12px 16px;
    }
    .item .meta {
      -webkit-line-clamp: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: .2px;
      white-space: pre-line;
      color: rgba(0,0,0,.34);

    }
    .title {
      /* overflow: hidden;
      text-overflow: ellipsis; */
      display: -webkit-box;
      -webkit-box-orient: vertical;

      -webkit-line-clamp: 2;
      margin-bottom: 8px;

      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0;
      font-weight: 500;
      word-break: break-all;
    }
  `}</style>
</div>);
