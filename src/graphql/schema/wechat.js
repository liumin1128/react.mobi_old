import gql from 'graphql-tag';

export const WECHAT_DETAIL = gql`
  query wechatDetail($_id: String!) {
    detail: wechatDetail(_id: $_id) {
      __typename
      _id
      content
    }
  }
`;

export const WECHAT_LIST = gql`
  query wechat($name: String) {
    list: wechat(name: $name) {
      __typename
      _id
      createdAt
      title
      cover
      digest
    }
  }
`;
