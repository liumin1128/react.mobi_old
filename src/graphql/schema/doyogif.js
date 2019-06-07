import gql from 'graphql-tag';

export const DOYOGIF_DETAIL = gql`
  query doyogifDetail($_id: String!, $skip: Int) {
    list: doyogifDetail(_id: $_id, skip: $skip) {
      __typename
      src
      title
    }
  }
`;

export const DOYOGIF_LIST = gql`
  query doyogifList($skip: Int!) {
    list: doyogifList(skip: $skip) {
      __typename
      _id
      title
      cover
    }
  }
`;
