import React, { PureComponent } from 'react';
import { connect } from '../../utils';
import { Creater, Comment } from '../../components';

@connect(({ say: { detail } }) => ({
  detail,
}))
export default class extends PureComponent {
  render() {
    const { detail } = this.props;
    console.log('detail');
    console.log(detail);
    return (<div className="body">
      <div className="detail card">
        <Creater
          avatarUrl={detail.user.avatarUrl}
          nickname={detail.user.nickname}
          createdAt={detail.createdAt}
        />
        <div className="content">{detail.content}</div>
      </div>

      <Comment id={detail._id} />

      <style jsx>{`
        .body {
          padding: 0px;
        }
        .detail {
          padding: 16px;
          margin-bottom: 8px;
          background: #fff;
        }
        .content {
          font-size: 14px;
          margin-top: 8px;
        }
        .body img {
          width: 100%;
        }
      `}</style>
    </div>);
  }
}

