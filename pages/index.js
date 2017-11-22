import React, { PureComponent } from 'react';
import SayList from '../components/say/list';
import { reduxMainPage } from '../store';

class Index extends PureComponent {
  static async getInitialProps({ query, store }) {
    await store.dispatch({
      type: 'say/init',
      payload: query,
    });
    return query;
  }

  constructor(props) {
    super(props);
    this.test = () => {
      this.props.dispatch({
        type: 'common/save',
        payload: {
          loginModalVisible: true,
        },
      });
    };
    this.test2 = () => {
      this.props.dispatch({
        type: 'common/save',
        payload: {
          registerModalVisible: true,
        },
      });
    };
  }
  render() {
    return (
      <div>
        <SayList />
        <style jsx>{`
          .h1 {
            color: red;
            font-size: 30px;
          }
        `}</style>
      </div>
    );
  }
}

export default reduxMainPage(Index);

