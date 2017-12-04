import React from 'react';
import { PureComponent, connect, toast } from '../../utils';
import Input from '../../components/form/input';
import Button from '../../components/form/button';
import Upload from '../../components/upload';

@connect(({ common }) => ({
  qiniuToken: common.qiniuToken,
}))
export default class Post extends PureComponent {
  constructor(props) {
    super(props);
    this.submit = () => {
      // console.log(this.photos.getValue());
      const photos = this.photos.getValue();
      const content = this.content.input.value;
      if (content) {
        this.props.dispatch({
          type: 'say/create',
          payload: {
            content,
            photos,
          },
        });
      } else {
        toast('什么也没写');
      }
    };
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'common/getQiniuToken',
    });
  }
  render() {
    const { qiniuToken } = this.props;
    return (
      <div className="post">
        <Input
          type="textarea"
          style={{ margin: 0, borderRadius: 5, padding: '0 8px 8px 8px' }}
          ref={(c) => { this.content = c; }}
          placeholder="想说什么？"
        />
        <Upload
          qiniuToken={qiniuToken}
          ref={(c) => { this.photos = c; }}
        />
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

