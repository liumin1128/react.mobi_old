import React, { PureComponent } from 'react';
import Search from '../../components/search';

export default class SearchBar extends PureComponent {
  onSubmit = (value) => {
    console.log('value');
    console.log(value);
  }
  render() {
    return (<Search onSubmit={this.onSubmit} />);
  }
}
