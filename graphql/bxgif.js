import gql from 'graphql-tag';

export const BXGIF_DETAIL = gql`
  query bxgifDetail($_id: String!) {
    detail: bxgifDetail(_id: $_id) {
      __typename
      _id
      title
      list {
        url
        title
      }
    }
  }
`;

export const BXGIF_LIST = gql`
  query bxgifList($skip: Int!) {
    list: bxgifList(skip: $skip) {
      __typename
      _id
      title
      cover
      comment
      createdAt
      total
    }
  }
`;
