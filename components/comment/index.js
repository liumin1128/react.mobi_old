import React, { PureComponent } from 'react';
import { connect } from '../../utils';
import Creater from '../user/avatar-nickname-meta';

@connect(({ comment }) => ({
  list: comment.list,
}))
export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.comment = () => {
      const { id, dispatch } = this.props;
      dispatch({ type: 'comment/create', payload: { content: '2121', id } });
    };
  }
  componentWillMount() {
    const { id, dispatch } = this.props;
    dispatch({ type: 'comment/init', payload: { id } });
  }
  render() {
    const { id, list = [] } = this.props;
    return (<div>
      <div className="comments card">
        {
          list.map(i => (<div>
            <Creater
              avatarUrl={i.user.avatarUrl}
              nickname={i.user.nickname}
              createdAt={i.createdAt}
            />
            <content>{i.content}</content>
          </div>))
        }
      </div>
      <button onClick={this.comment}>77777</button>
      <style jsx>{`
        .comments {
          padding: 16px;
        }
      `}</style>
    </div>);
  }
}
