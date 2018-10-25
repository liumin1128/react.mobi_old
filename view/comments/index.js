import React, { PureComponent } from 'react';
import List from './list';

export default class index extends PureComponent {
  render() {
    const { _id } = this.props;
    return (
      <div>
        <List _id={_id} />
      </div>
    );
  }
}
