import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectHits, Hits, Highlight } from 'react-instantsearch-dom';
import HeaderSearch from '@/components/Header/Search';

const Hit = ({ hit }) => (
  <p>
    <Highlight attribute="title" hit={hit} tagName="mark" />
    {/* <Highlight attribute="content" hit={hit} tagName="content" /> */}
  </p>
);

class MenuSelect extends Component {
  onChange = (event) => {
    const { refine, currentRefinement } = this.props;
    const { value } = event.currentTarget;
    if (value !== currentRefinement) {
      refine(value);
    }
  };


  render() {
    console.log('this.props');
    console.log(this.props);
    return (
      11111
    );
  }
}

export default connectHits(MenuSelect);
