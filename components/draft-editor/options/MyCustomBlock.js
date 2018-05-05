import React, { PureComponent, createRef } from 'react';

export default class MyCustomBlock extends PureComponent {
  render() {
    return (
      <div className="MyCustomBlock">
        <h1>MyCustomBlock</h1>
        {this.props.children}
      </div>
    );
  }
}
