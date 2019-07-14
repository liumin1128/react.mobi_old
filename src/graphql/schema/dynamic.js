import gql from 'graphql-tag';

export const DYNAMIC_DETAIL = gql`
  query DynamicDetail($_id: String!) {
    data: dynamic(_id: $_id) {
      __typename
      _id
      content
      pictures
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
      createdAt
      _id
      content
      pictures
      topics {
        _id
        title
        number
      }
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
        pictures
        topics {
          _id
          title
          number
        }
        createdAt
        user {
          nickname
          avatarUrl
        }
      }
    }
  }
`;


export const DYNAMIC_TOPIC_LIST = gql`
  query DynamicTopicList($first: Int, $skip: Int, $title: String) {
    list: DynamicTopics(first: $first, skip: $skip, title: $title) {
      __typename
      _id
      title
      number
    }
  }
`;