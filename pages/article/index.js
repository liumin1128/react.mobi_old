import React, { PureComponent } from 'react';
import { reduxMainPage } from '../../store';
import ArticleList from '../../routes/article/list';

class Index extends PureComponent {
  // static async getInitialProps({ query, store }) {
  //   await store.dispatch({
  //     type: 'article/init',
  //     payload: query,
  //   });
  //   return query;
  // }
  componentDidMount() {
    this.props.dispatch({
      type: 'article/init',
      payload: {},
    });
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
        <ArticleList />
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

