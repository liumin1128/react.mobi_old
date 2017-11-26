import React, { PureComponent } from 'react';
import { reduxMainPage } from '../../store';
import Detail from '../../routes/article/detail';

class Index extends PureComponent {
  static async getInitialProps({ query, store }) {
    await store.dispatch({
      type: 'article/detail',
      query,
    });
  }
  render() {
    return (
      <div>
        <Detail />
      </div>
    );
  }
}

export default reduxMainPage(Index);

