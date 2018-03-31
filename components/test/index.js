import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

function PostList({
  data: {
    loading, error, says, _saysMeta,
  }, loadMore,
}) {
  const isEnd = _saysMeta.count <= says.length;
  if (error) return 'error';
  return (<div>{JSON.stringify(says)}
    <h1>{_saysMeta.count}</h1>
    {!isEnd && <button onClick={() => loadMore()}>
      {loading ? 'Loading...' : 'Show More'}
    </button>}
  </div>);
}

export const allPosts = gql`
  query($first: Int!, $skip: Int!) {
    says(first: $first, skip: $skip) {
      content
      createdAt
      user {
        nickname
        avatarUrl
      }
    }
    _saysMeta {
      count
    }
  }
`;

export const params = {
  skip: 0,
  first: 3,
};

export default graphql(
  allPosts,
  {
    options: {
      variables: params,
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
