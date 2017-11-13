import React, { PureComponent } from 'react';
import { reduxMainPage } from '../../store';

class Index extends PureComponent {
  static async getInitialProps({ query, store }) {
    await store.dispatch({
      type: 'say/detail',
      query,
    });
  }
  // componentDidMount() {
  //   const { id } = this.props.url.query;
  //   this.props.dispatch({
  //     type: 'comment/init',
  //     query: { id },
  //   });
  // }
  render() {
    return (
      <div>
        <h1>detail</h1>
      </div>
    );
  }
}

export default reduxMainPage(Index);

