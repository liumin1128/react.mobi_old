import gql from 'graphql-tag';

export const DYNAMIC_DETAIL = gql`
  query DynamicDetail($_id: String!) {
    data: dynamic(_id: $_id) {
      __typename
      _id
      content
      pictures
      iframe
      createdAt
      zanCount
      zanStatus
      commentCount
      topics {
        _id
        title
        number
      }
      user {
        nickname
        avatarUrl
        sign
      }
    }
  }
`;

export const DYNAMIC_LIST = gql`
  query DynamicList($first: Int, $skip: Int, $topic: String, $user: String) {
    list: dynamics(first: $first, skip: $skip, topic: $topic, user: $user) {
      __typename
      createdAt
      _id
      content
      pictures
      iframe
      zanCount
      zanStatus
      commentCount
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
        iframe
        zanCount
        zanStatus
        commentCount
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

export const DYNAMIC_UPDATE = gql`
  mutation DynamicUpdate($input: DynamicInput, $_id: String!) {
    result: DynamicUpdate(input: $input, _id: $_id) {
      status
      message
      data {
        __typename
        _id
        content
        pictures
        iframe
        zanCount
        zanStatus
        commentCount
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

export const DYNAMIC_TOPIC = gql`
  query DynamicTopic($topic: String) {
    data: DynamicTopic(topic: $topic) {
      __typename
      _id
      title
      number
    }
  }
`;

export const CHECK_NEW_DYNAMIC = gql`
  mutation CheckNewDynamic($latest: String!) {
    result: CheckNewDynamic(latest: $latest) {
      __typename
      status
      message
    }
  }
`;
