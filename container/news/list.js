import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import NewsItem from '../../components/news/item';
import Loading from '../../components/loading-button';

@connect(({ news, loading }) => ({
  list: news.list,
  isEnd: news.isEnd,
  moreLoading: loading['news/more'],
}))
export default class extends PureComponent {
  state = {
    page: 1,
  }
  more = () => {
    const {
      dispatch, list, moreLoading, isEnd,
    } = this.props;
    if (!moreLoading && !isEnd) {
      const page = parseInt(list.length / 10, 0) + 1;
      this.setState({ page });
      dispatch({
        type: 'news/more',
        payload: { page },
      });
    }
  }
  render() {
    const { list = [], moreLoading, isEnd } = this.props;
    const { page } = this.state;
    return (<div>
      {list.length !== 0 && list.map(i => (
        <NewsItem key={i._id} {...i} />
      ))}
      {list.length !== 0 && <Waypoint
        key={page}
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
