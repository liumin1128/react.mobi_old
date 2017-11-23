import React, { PureComponent } from 'react';
import { connect } from '../../utils';
import Creater from '../user/avatar-nickname-meta';
import Loading from '../loading';
@connect(({ comment }) => ({
  list: comment.list,
  isEnd: comment.isEnd,
}))
export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.more = () => {
      const { id, dispatch } = this.props;
      console.log(id);
      dispatch({
        type: 'comment/more',
        query: { id },
      });
    };
  }
  componentDidMount() {
    const { id, dispatch } = this.props;
    dispatch({ type: 'comment/init', query: { id } });
  }
  render() {
    const { list = [], isEnd, dispatch } = this.props;
    return (<div>
      <div className="comments card">
        {
          list.map(i => (<div key={i._id} className="comment-item">
            <Creater
              avatarUrl={i.user.avatarUrl}
              nickname={i.user.nickname}
              createdAt={i.createdAt}
            />
            <div className="action">
              <button
                onClick={() => {
                dispatch({
                  type: 'comment/save',
                  payload: {
                    createCommentModalVisible: true,
                    createCommentObjectId: i.id,
                    createCommentReplyId: i._id,
                  },
                });
              }}
              >评论</button>
            </div>
            <div className="content">{i.content}</div>
          </div>))
        }
      </div>
      <Loading
        isEnd={isEnd}
        onEnter={this.more}
      />
      <style jsx>{`
        .content {
          font-size: 14px;
          margin-top: 8px;
          padding-left: 48px;
        }
        .comments {
          padding: 0px;
        }
        .comment-item {
          border-top: 1px rgba(0,0,0,0.05) solid;
          padding: 16px;
          position: relative;
        }
        .action {
          position: absolute;
          right: 20px;
          top: 20px;
        }
      `}</style>
    </div>);
  }
}
