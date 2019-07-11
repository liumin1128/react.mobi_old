import gql from 'graphql-tag';

export const SAY_DETAIL = gql`
  query DynamicDetail($_id: String!) {
    data: dynamic(_id: $_id) {
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
  query DynamicList($first: Int, $skip: Int) {
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

export const SAY_CREATE = gql`
  mutation DynamicCreate($input: DynamicInput) {
    result: DynamicCreate(input: $input) {
      status
      message
    }
  }
`;
