import React, { PureComponent } from 'react';
import Zmage from 'react-zmage';

export default ({ list }) => (<div>
  {
    list.map(i => (<Zmage
      set={list.map(j => ({ src: j }))}
      src={i}
      alt=""
    />))
  }
</div>);
