import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import { connectAutoComplete, Hits, Highlight } from 'react-instantsearch-dom';
import HeaderSearch from '@/components/Header/Search';

class Search extends Component {
  onChange = debounce((event) => {
    console.log(event);
    console.log(this);
    const { refine, currentRefinement } = this.props;
    const value = event.currentTarget();
    console.log('value');
    console.log(value);
    if (value !== currentRefinement) {
      refine(value);
    }
  }, 300)

  render() {
    return (
      <HeaderSearch onChange={this.onChange} />
    );
  }
}

export default connectAutoComplete(Search);
