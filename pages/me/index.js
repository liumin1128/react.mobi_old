import React, { PureComponent } from 'react';
import { reduxPage } from '../../store';
import { User } from '../../components';

class Index extends PureComponent {
  render() {
    return (
      <div className="uc">
        <User />
        <h1>m3</h1>
        <style jsx>{`
          .uc {
            // padding: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default reduxPage(Index);

