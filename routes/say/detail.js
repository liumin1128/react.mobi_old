import React, { PureComponent } from 'react';
import { connect } from '../../utils';
import { Creater } from '../../components';

@connect(({ say: { detail } }) => ({
  detail,
}))
export default class extends PureComponent {
  render() {
    const { detail } = this.props;
    console.log('detail');
    console.log(detail);
    return (<div className="body">

      <Creater
        avatarUrl={detail.user.avatarUrl}
        nickname={detail.user.nickname}
        createdAt={detail.createdAt}
      />

      <div className="content">{detail.content}</div>

      <style jsx>{`
      .body {
        padding: 20px;
      }
      .body img {
        width: 100%;
      }
    `}</style>
    </div>);
  }
}

