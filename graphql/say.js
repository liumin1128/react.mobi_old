import gql from 'graphql-tag';

export const SAY_DETAIL = gql`
  query SayDetail($_id: String!) {
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
  query SayList($first: Int!, $skip: Int!) {
    list: says(first: $first, skip: $skip) {
      __typename
      _id
      content
      createdAt
      user {
        nickname
        avatarUrl
      }
    }
    meta: _saysMeta {
      count
    }
  }
`;
