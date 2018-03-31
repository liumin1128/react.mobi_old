import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Item from './item';

function PostList({ data: { loading, error, say } }) {
  if (error) return 'error';
  if (loading) return 'loading';
  return (<div>
    {say.content}
  </div>);
}

export const allPosts = gql`
  query($_id: String!) {
    say(_id: $_id) {
      __typename
      _id
      content
      createdAt
      user {
        nickname
        avatarUrl
      }
    }
  }
`;

export default graphql(
  allPosts,
  {
    options: {
      variables: { _id: '59f83ebc0c14d24450c64605' },
    },
    props: ({ data }) => ({
      data,
      loadMore: () => {
        console.log('data');
        console.log(data);
        return data.fetchMore({
          variables: {
            skip: data.says.length,
          },
          updateQuery: (previousResult, { fetchMoreResult }) => {
            if (!fetchMoreResult) {
              return previousResult;
            }
            return {
              ...fetchMoreResult,
              says: [
                ...previousResult.says,
                ...fetchMoreResult.says,
              ],
            };
          },
        });
      },
    }),
  },
)(PostList);
