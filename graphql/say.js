import gql from 'graphql-tag';

export const SAY_DETAIL = gql`
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

export const SAY_LIST = gql`
  query($first: Int!, $skip: Int!) {
    says(first: $first, skip: $skip) {
      __typename
      _id
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
