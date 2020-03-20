import React, { PureComponent } from 'react';
import SearchBar from './SearchBar';
import Tags from './TagsSmall';

export default class News extends PureComponent {
  render() {
    return (
      <>
        <SearchBar />
        <br />
        <Tags />
      </>
    );
  }
}
