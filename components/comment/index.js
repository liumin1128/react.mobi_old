import React, { PureComponent } from 'react';
import { connect } from '../../utils';
import Creater from '../user/avatar-nickname-meta';
import Loading from '../loading';
import FixedButtom from '../fixed/bottom';
import Button from '../button';

@connect(({ comment }) => ({
  list: comment.list,
  isEnd: comment.isEnd,
}))
export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
    this.comment = () => {
      const { content } = this.state;
      const { id, dispatch } = this.props;
      dispatch({
        type: 'comment/create',
        payload: { content, id },
        cb: () => {
          this.input.value = '';
          this.setState({
            content: '',
          });
        },
      });
    };
    this.more = () => {
      const { id, dispatch } = this.props;
      dispatch({
        type: 'comment/more',
        payload: { id },
      });
    };
    this.onChange = () => {
      setTimeout(() => {
        this.setState({
          content: this.input.value,
        });
      }, 20);
    };
  }
  componentWillMount() {
    const { id, dispatch } = this.props;
    dispatch({ type: 'comment/init', payload: { id } });
  }
  render() {
    const { list = [], isEnd } = this.props;
    const { content } = this.state;
    return (<div>
      <div className="comments card">
        {
          list.map(i => (<div key={i._id} className="comment-item">
            <Creater
              avatarUrl={i.user.avatarUrl}
              nickname={i.user.nickname}
              createdAt={i.createdAt}
            />
            <div className="content">{i.content}</div>
          </div>))
        }
      </div>
      <Loading
        isEnd={isEnd}
        onEnter={this.more}
      />
      <FixedButtom>
        <div className="comment-bottom">
          <input
            ref={(c) => { this.input = c; }}
            className="input"
            type="text"
            onChange={this.onChange}
          />
          <Button
            style={{
              width: 80,
              fontSize: 12,
              fontWeight: 'bolder',
              background: 'none',
              color: '#2196f3',
            }}
            onClick={this.comment}
            disabled={!content}
            className="button"
          >
            发布
          </Button>
        </div>
      </FixedButtom>
      <style jsx>{`
        .content {
          font-size: 14px;
          margin-top: 8px;
        }
        .comments {
          padding: 0px;
        }
        .comment-item {
          border-top: 1px rgba(0,0,0,0.05) solid;
          padding: 16px;
        }
        .comment-bottom {
          display: flex;
          padding: 4px 8px;
        }
        .comment-bottom .input {
          box-sizing: border-box;
          background: rgba(0,0,0,0.05);
          font-size: 14px;
          display: block;
          border-radius: 3px;
          height: 30px;
          line-height: 30px;
          padding: 0 10px;
          width: 100%;
          border: 0;
          box-shadow: 0px 0px 1px rgba(0, 0, 0, .1);
        }
      `}</style>
    </div>);
  }
}
