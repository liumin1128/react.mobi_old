import gql from 'graphql-tag';

export const NEWS_DETAIL = gql`
  query NewsDetail($_id: String!) {
    data: NewsDetail(_id: $_id) {
      __typename
      title
      createdAt
      content
      appCode
      appName
      showHtml
      html
      labels
      photos
      cover
      tags
      url
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
      content
      appCode
      appName
      html
      labels
      photos
      cover
      tags
    }
  }
`;
