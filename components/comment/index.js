import React, { PureComponent } from 'react';
import { connect } from '../../utils';

@connect(({ comment }) => ({
  list: comment.list,
}))
export default class extends PureComponent {
  constructor(props) {
    super(props);
    this.comment = () => {
      const { id, dispatch } = this.props;
      dispatch({ type: 'comment/create', payload: { content: 'xxxxxxx', id } });
    };
  }
  componentWillMount() {
    const { id, dispatch } = this.props;
    dispatch({ type: 'comment/init', payload: { id } });
  }
  render() {
    const { id, list = [] } = this.props;
    return (<div>
      <h1>{id}</h1>
      <h1>{list.length}</h1>
      <button onClick={this.comment}>77777</button>
    </div>);
  }
}
