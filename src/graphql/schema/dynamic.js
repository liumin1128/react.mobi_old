import gql from 'graphql-tag';

export const DYNAMIC_DETAIL = gql`
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

export const DYNAMIC_LIST = gql`
  query DynamicList($first: Int, $skip: Int) {
    list: dynamics(first: $first, skip: $skip) {
      __typename
      _id
      content
      createdAt
      user {
        nickname
        avatarUrl
      }
    }
    meta: _dynamicsMeta {
      count
    }
  }
`;

export const DYNAMIC_CREATE = gql`
  mutation DynamicCreate($input: DynamicInput) {
    result: DynamicCreate(input: $input) {
      status
      message
      data {
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
  }
`;
