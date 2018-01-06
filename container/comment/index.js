import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Item from './item';
import Create from './create';

const styles = theme => ({
  card: {
    // maxWidth: 400,
    flexGrow: 1,
    marginBottom: 32,
    boxShadow: '0 10px 28px 0 rgba(137,157,197,.12)',
  },
});

@connect(({ comment = {} }) => ({
  list: comment.list,
  isEnd: comment.isEnd,
}))
@withStyles(styles)
export default class extends PureComponent {
  componentWillMount() {
    const { id, dispatch } = this.props;
    dispatch({ type: 'comment/init', query: { id } });
  }
  render() {
    const { list = [], id } = this.props;
    const Test = Create({
      key: id,
      payload: { id },
      placeholder: '指点江山，激扬文字',
    });
    return (<div>
      <Test />
      {
        list.map(i => <Item id={id} key={i._id} {...i} />)
      }
    </div>);
  }
}
