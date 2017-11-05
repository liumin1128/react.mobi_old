import React, { PureComponent } from 'react';
import Login from '../components/login';
import Head from '../components/head';
import { reduxPage } from '../store';
import Toast from '../components/toast';

class Index extends PureComponent {
  // static async getInitialProps({ query, store }) {
  //   await store.dispatch({
  //     type: 'say/init',
  //     payload: query,
  //   });
  //   return query;
  // }
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
  }
  render() {
    return (
      <div>
        <Head>
          <title>本王今年八岁</title>
          <meta name="description" content="注册" className="next-head" />
        </Head>
        <Login />
        <Toast />
        <button onClick={this.test}>8888</button>
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

