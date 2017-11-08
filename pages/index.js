import React, { PureComponent } from 'react';
import FloatButton from '../components/button/float-bottom';
import Login from '../components/login';
import Register from '../components/login/register';
import Head from '../components/head';
import Toast from '../components/toast';
import SayList from '../components/say/list';
import NavBottom from '../components/navigation/bottom';
import { reduxPage } from '../store';

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
        <Head>
          <title>本王今年八岁</title>
          <meta name="description" content="注册" className="next-head" />
        </Head>
        <FloatButton />
        <Login />
        <SayList />
        <Register />
        <Toast />
        <button onClick={this.test}>登录</button>
        <button onClick={this.test2}>注册</button>
        <NavBottom />
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

export default reduxPage(Index);

