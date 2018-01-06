import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Waypoint from 'react-waypoint';
import Item from './item';
import Create from './create';
import Loading from '../../components/loading-button';

const styles = theme => ({
  card: {
    // maxWidth: 400,
    flexGrow: 1,
    marginBottom: 32,
    boxShadow: '0 10px 28px 0 rgba(137,157,197,.12)',
  },
  textarea: {
    '@media (max-width: 768px)': {
      padding: 16,
    },
  },
});

@connect(({ comment = {}, loading }) => ({
  list: comment.list,
  isEnd: comment.isEnd,
  moreLoading: loading['say/more'],
}))
@withStyles(styles)
export default class extends PureComponent {
  componentWillMount() {
    const { id, dispatch } = this.props;
    dispatch({ type: 'comment/init', query: { id } });
  }
  more = () => {
    const {
      dispatch, list = [], moreLoading, isEnd, id,
    } = this.props;
    if (!moreLoading && !isEnd) {
      const page = parseInt(list.length / 10, 0) + 1;
      dispatch({
        type: 'comment/more',
        query: { id, page },
      });
    }
  }
  render() {
    const {
      list = [], id, classes, moreLoading, isEnd,
    } = this.props;
    const Test = Create({
      key: id,
      payload: { id },
      placeholder: '指点江山，激扬文字',
    });
    return (<div>
      <div className={classes.textarea}>
        <Test />
      </div>
      {
        list.map(i => <Item key={i._id} id={id} {...i} />)
      }
      {list.length !== 0 && <Waypoint
        onEnter={this.more}
      >
        <div>
          <Loading
            loading={moreLoading}
            isEnd={isEnd}
          />
        </div>
      </Waypoint>}
    </div>);
  }
}
