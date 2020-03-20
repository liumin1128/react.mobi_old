import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connectAutoComplete, Hits, Highlight } from 'react-instantsearch-dom';
import HeaderSearch from '@/components/Header/Search';

const Hit = ({ hit }) => (
  <p>
    <Highlight attribute="title" hit={hit} tagName="mark" />
    {/* <Highlight attribute="content" hit={hit} tagName="content" /> */}
  </p>
);

class MenuSelect extends Component {
//   static propTypes = {
//     items: PropTypes.arrayOf(
//       PropTypes.shape({
//         label: PropTypes.string.isRequired,
//         value: PropTypes.string.isRequired,
//         isRefined: PropTypes.bool.isRequired,
//       }),
//     ).isRequired,
//     refine: PropTypes.func.isRequired,
//   };

  onChange = (event) => {
    const { refine } = this.props;
    const { value } = event.currentTarget;

    if (value !== 'categories') {
      refine(value);
    } else {
      refine();
    }
  };


  render() {
    console.log('this.props');
    console.log(this.props);
    const { hits } = this.props;

    return (
      <>
        <HeaderSearch onChange={this.onChange} />
        <Hits />

      </>
    );
  }
}

export default connectAutoComplete(MenuSelect);
