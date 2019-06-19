import gql from 'graphql-tag';

export const SAY_DETAIL = gql`
  query SayDetail($_id: String!) {
    data: say(_id: $_id) {
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
  query SayList($first: Int, $skip: Int) {
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
  mutation SayCreate($input: SayInput) {
    result: SayCreate(input: $input) {
      status
      message
    }
  }
`;
