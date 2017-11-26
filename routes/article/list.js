import React, { PureComponent } from 'react';
import { connect } from '../../utils';
import Item from './item';

@connect(({ article }) => ({
  list: article.list,
}))
export default class extends PureComponent {
  render() {
    const { list = [] } = this.props;
    return (<div >
      {
        list.map(i => (<div key={i._id} >
          <Item {...i} />
        </div>))
      }
    </div>);
  }
}

