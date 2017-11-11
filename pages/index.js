import React, { PureComponent } from 'react';
import { Nvigation, FloatButton } from '../components';
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
        <FloatButton />
        <SayList />
        <Nvigation />
        <button onClick={this.test}>登录</button>
        <button onClick={this.test2}>注册</button>
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

