import React, { PureComponent } from 'react';
import Router from 'next/router';
import Search from '@/components/Form/Search';

export default class SearchBar extends PureComponent {
  onSubmit = (value) => {
    Router.push({
      pathname: '/mzitu',
      query: value,
    });
  }

  render() {
    return (
      <div>
        <Search onSubmit={this.onSubmit} />
      </div>
    );
  }
}
