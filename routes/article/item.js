import React from 'react';
import Link from 'next/link';

export default ({ title, _id }) => (<div className="item">
  <Link href={`/article/detail?id=${_id}`}>
    <h1 className="title"><a href={`/article/detail?id=${_id}`}>{title}</a></h1>
  </Link>
  <style jsx>{`
    .item {
      padding: 10px;
    }
    .title {
      font-size: 16px;
      font-weight: 100;
    }
  `}</style>
</div>);
