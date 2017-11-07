import React from 'react';
import { PureComponent } from '../../utils';

export default class extends PureComponent {
  render() {
    return (<div className="navbottom">
      <div className="item">123</div>
      <style jsx>{`
        .navbottom {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: red;
          height: 60px;
        }
        .item {
          flex: 1;
        }
      `}</style>
    </div>);
  }
}
