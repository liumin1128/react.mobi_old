import gql from 'graphql-tag';

export const NEWS_DETAIL = gql`
  query NewsDetail($_id: String!) {
    news: NewsDetail(_id: $_id) {
      __typename
      title
      createdAt
      description
      source
      html
      labels
      photos
      cover
      tags
    }
  }
`;

export const NEWS_LIST = gql`
  query NewsList($first: Int, $skip: Int) {
    list: NewsList(first: $first, skip: $skip) {
      __typename
      _id
      title
      createdAt
      description
      source
      html
      labels
      photos
      cover
      tags
    }
  }
`;
