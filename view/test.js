import React, { PureComponent, Fragment } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const TEST = gql`
  query test {
    list: books {
      __typename
      title
    }
  }
`;

@graphql(TEST)
export default class test extends PureComponent {
  render() {
    const { data } = this.props;
    const { loading, error, list } = data;

    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    return (
      <Fragment>
        {list.map(i => (
          <div id={i._id}>
            {i.title}
          </div>
        ))}
      </Fragment>
    );
  }
}
