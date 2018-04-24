import React, { PureComponent } from 'react';
import Router from 'next/router';
import Search from '../../components/search';

export default class SearchBar extends PureComponent {
  onSubmit = (value) => {
    Router.push({
      pathname: '/mzitu',
      query: value,
    });
  }
  render() {
    return <div style={{ marginBottom: 28 }}><Search onSubmit={this.onSubmit} /></div>;
  }
}
