import React, { PureComponent, Fragment } from 'react';
import SearchBar from './SearchBar';
import Tags from './TagsSmall';

export default class News extends PureComponent {
  render() {
    return (
      <Fragment>
        <SearchBar />
        <br />
        <Tags />
      </Fragment>
    );
  }
}
