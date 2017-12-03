import React, { PureComponent } from 'react';
import { connect } from '../../utils';
import Creater from '../../components/user/avatar-nickname-meta';
import CommentList from '../../components/comment/list';
import CommentCreateModal from '../../components/comment/create';

@connect(({ say: { detail } }) => ({
  detail,
}))
export default class extends PureComponent {
  render() {
    const { detail, dispatch } = this.props;
    return (<div className="body">
      <div className="detail card">
        <Creater
          avatarUrl={detail.user.avatarUrl}
          nickname={detail.user.nickname}
          createdAt={detail.createdAt}
        />
        <div className="content">{detail.content}</div>
        {
          detail.photos && detail.photos.map(i => <img key={i} src={i} className="cover" alt="" />)
        }
        <div className="footer">
          <div className="action">喜欢</div>
          <div className="action">打call</div>
          <button
            className="action"
            onClick={() => {
              dispatch({
                type: 'comment/save',
                payload: {
                  createCommentModalVisible: true,
                  createCommentObjectId: detail._id,
                },
              });
            }}
          >评论</button>
        </div>
      </div>

      <CommentList id={detail._id} />
      <CommentCreateModal />

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

