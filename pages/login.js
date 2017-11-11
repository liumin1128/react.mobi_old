import React, { Component } from 'react';
import Router from 'next/router';
import { setStorage } from '../utils';
import { reduxPage } from '../store';

class Login extends Component {
  // static async getInitialProps({ query }) {
  //   return query;
  // }
  componentDidMount() {
    const { token } = this.props.url.query;
    setStorage('token', token);
    this.props.dispatch({
      type: 'user/getUserInfo',
    });
    Router.push('/');
  }
  render() {
    const { token } = this.props.url.query;
    return (<div>
      <p>{token}</p>
      <h1>登录成功</h1>
    </div>);
  }
}

export default reduxPage(Login);

