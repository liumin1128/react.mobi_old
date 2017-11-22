import React, { PureComponent } from 'react';
import { connect } from '../../utils';
import Button from '../button';
import SmallModal from '../modal/small';
@connect(({ comment }) => ({
  id: comment.createCommentObjectId,
  visible: comment.createCommentModalVisible,
}))
export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      visible: true,
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
            visible: false,
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
    dispatch({ type: 'comment/init', query: { id } });
  }
  render() {
    const { content, visible } = this.state;
    return (<div>
      <SmallModal visible={visible}>
        <div className="modal-comment-top">
          <Button
            style={{
              fontSize: 14,
              background: 'none',
              padding: '16px 18px',
              // color: '#2196f3',
            }}
            onClick={() => {
              this.setState({
                visible: false,
              });
            }}
            className="button"
          >
            取消
          </Button>
          <Button
            style={{
              fontSize: 14,
              background: 'none',
              padding: '16px 18px',
              color: '#2196f3',
            }}
            onClick={this.comment}
            disabled={!content}
            className="button"
          >
            发布
          </Button>
        </div>
        <div className="modal-comment-textarea">
          <textarea
            ref={(c) => { this.input = c; }}
            type="text"
            onChange={this.onChange}
            rows={5}
            placeholder="说点什么？"
          />
        </div>

      </SmallModal>

      <style jsx>{`
        .modal-comment-top {
          display: flex;
          justify-content: space-between;
        }
        .modal-comment-textarea {
          padding: 16px;
          border: 1px rgba(0,0,0,0.05) solid;
          border-width: 1px 0 1px 0;
        }
        .modal-comment-textarea textarea {
          width: 100%;
          border: none;
          font-size: 14px;
        }
      `}</style>
    </div>);
  }
}
