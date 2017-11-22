import React, { PureComponent } from 'react';
import { connect } from '../../utils';
import Creater from '../../components/user/avatar-nickname-meta';
import CommentList from '../../components/comment/list';

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
        <div className="footer">
          <div className="action">喜欢</div>
          <div className="action">打call</div>
          <div className="action">评论</div>
        </div>
      </div>

      <CommentList id={detail._id} />

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
        .footer {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 16px;
        }
        .footer .action {
          font-size: 12px;
        }
      `}</style>
    </div>);
  }
}

