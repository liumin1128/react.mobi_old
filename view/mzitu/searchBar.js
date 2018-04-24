import React, { PureComponent } from 'react';
import Router from 'next/router';
import Search from '../../components/search';
import { Divider } from 'material-ui';

export default class SearchBar extends PureComponent {
  onSubmit = (value) => {
    Router.push({
      pathname: '/mzitu',
      query: value,
    });
  }
  render() {
    return <div style={{ marginBottom: theme.spacing.unit * 3 }}><Search onSubmit={this.onSubmit} /></div>;
  }
}
