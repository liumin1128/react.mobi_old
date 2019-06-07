import React, { PureComponent } from 'react';
import { withRouter } from 'next/router';
import Search from '@/components/Form/Search';

@withRouter
export default class SearchBar extends PureComponent {
  onSubmit = (value) => {
    const { router } = this.props;
    router.push({ pathname: '/mzitu', query: value });
  }

  render() {
    const { router } = this.props;
    const { search } = router.query;
    return (
      <Search
        defaultValue={search}
        onSubmit={this.onSubmit}
      />
    );
  }
}
