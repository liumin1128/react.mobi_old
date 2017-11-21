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
    this.comment = () => {
      const { id, dispatch } = this.props;
      dispatch({ type: 'comment/create', payload: { content: '2121', id } });
    };
    this.more = () => {
      const { id, dispatch } = this.props;
      dispatch({ type: 'comment/more', payload: { id } });
    };
  }
  componentWillMount() {
    const { id, dispatch } = this.props;
    dispatch({ type: 'comment/init', payload: { id } });
  }
  render() {
    const { id, list = [], isEnd } = this.props;
    return (<div>
      <div className="comments card">
        {
          list.map(i => (<div className="comment-item">
            <Creater
              avatarUrl={i.user.avatarUrl}
              nickname={i.user.nickname}
              createdAt={i.createdAt}
            />
            <content>{i.content}</content>
          </div>))
        }
      </div>
      <Loading
        isEnd={isEnd}
        onEnter={this.more}
        // onLeave={leave}
      />
      <button onClick={this.comment}>77777</button>
      <style jsx>{`
        .comments {
          padding: 0px;
        }
        .comment-item {
          border-top: 1px rgba(0,0,0,0.05) solid;
          padding: 16px;
        }
      `}</style>
    </div>);
  }
}
