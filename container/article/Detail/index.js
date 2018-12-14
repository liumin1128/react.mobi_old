import React, { PureComponent } from 'react';

export default class ArticleDetail extends PureComponent {
  render() {
    const { _id } = this.props;
    return (
      <div>
        {_id}
      </div>
    );
  }
}
