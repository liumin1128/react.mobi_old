import React, { PureComponent } from 'react';
import { Query } from 'react-apollo';
import Item from './item';
import { updateQuery } from '../../graphql/index';
import { SAY_LIST } from '../../graphql/say';
// import { withQuery } from '../../hoc/getQuery';

// @withQuery
export default class SayList extends PureComponent {
  render() {
    const { query = {} } = this.props;
    const { skip = 0, first = 5 } = query;
    return (
      <Query
        query={SAY_LIST}
        variables={{ skip, first }}
      >
        {({ loading, error, data = {}, fetchMore }) => {
          if (loading) return 'Loading...';
          if (error) return `Error! ${error.message}`;
          const { list = [], meta } = data;
          const isEnd = meta.count <= list.length;
          const loadMore = () => fetchMore({
            variables: { skip: list.length + skip },
            updateQuery,
          });
          return (
            <div>
              {
                list.map(i => <Item key={i._id} {...i} />)
              }
              {!isEnd && <button onClick={() => loadMore()}>
                {loading ? 'Loading...' : 'Show More'}
              </button>}
            </div>);
          }}
      </Query>);
  }
}
