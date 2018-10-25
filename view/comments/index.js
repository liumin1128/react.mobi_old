import React, { PureComponent } from 'react';
import Create from './create';

export default class index extends PureComponent {
  render() {
    const { _id } = this.props;
    return (
      <div>
        index
        <Create _id={_id} />
      </div>
    );
  }
}
