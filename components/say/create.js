import React from 'react';
import { PureComponent, connect, toast } from '../../utils';
import Input from '../form/input';
import Button from '../form/button';

class Post extends PureComponent {
  constructor(props) {
    super(props);
    this.submit = (values) => {
      const content = this.content.input.value;
      if (content) {
        this.props.dispatch({
          type: 'say/create',
          payload: {
            content,
          },
        });
      } else {
        toast('什么也没写');
      }
    };
  }
  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <Input type="textarea" ref={(c) => { this.content = c; }} placeholder="想说什么？" />
        <Button
          onClick={this.submit}
          type="primary"
          block
          style={{ width: '100%' }}
          rippleColor="rgba(255, 255, 255, .3)"
          during={1000}
        >
          确认
        </Button>
        <style jsx>
          {`
        .post {
          padding: 10px;
        }
        .item {
          width: 100%;
          margin-bottom: 8px;
        }
      `}
        </style>
      </div>
    );
  }
}

export default connect()(Post);
