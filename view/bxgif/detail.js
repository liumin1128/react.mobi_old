import React, { PureComponent } from 'react';

export default class BxgifDetail extends PureComponent {
  render() {
    const { id } = this.props;
    return (
      <div>
        <h1>{id}</h1>
      </div>
    );
  }
}
