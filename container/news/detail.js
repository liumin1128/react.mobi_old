import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import NewsItem from '../../components/news/item';

@connect(({ news }) => ({
  current: news.current,
}))
export default class extends PureComponent {
  render() {
    const { current = {} } = this.props;
    const {
      title, photos = [], content, zanCount, from, updatedAt,
    } = current;
    return (<div>
      <div className="detail-box">
        <img src={photos && photos[0]} alt="" className="detail-cover" />
        <h1 className="detail-title">{title}</h1>
        <div className="meta">
          <span>{zanCount}</span>
          <span>{from}</span>
          <span>{updatedAt}</span>
        </div>
        <div className="wangEditeContent" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>);
  }
}
